/**
 * Submit-handler tests for the Contact Us form (spec 010, US2 — T054).
 *
 * NOTE: the web-portfilio has no test runner configured yet. To run these, add a
 * Jest + React Testing Library setup (e.g. `next/jest`) and a `test` script.
 */
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import toast from 'react-hot-toast';
import ContactUs from '../ContactUs';
import { submitContact } from '../../lib/api';

jest.mock('../../lib/api', () => ({
  submitContact: jest.fn(),
}));

jest.mock('react-hot-toast', () => ({
  __esModule: true,
  default: { success: jest.fn(), error: jest.fn() },
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key, i18n: { language: 'en' } }),
}));

function fillForm() {
  fireEvent.change(document.querySelector('input[name="name"]'), { target: { value: 'Visitor One' } });
  fireEvent.change(document.querySelector('input[name="email"]'), { target: { value: 'visitor@example.com' } });
  fireEvent.change(document.querySelector('input[name="phone"]'), { target: { value: '0790000000' } });
  fireEvent.change(document.querySelector('input[name="subject"]'), { target: { value: 'Partnership' } });
  fireEvent.change(document.querySelector('textarea[name="message"]'), { target: { value: 'Tell me more about partnering.' } });
}

describe('ContactUs submit handler', () => {
  beforeEach(() => jest.clearAllMocks());

  it('posts name, email, phone, subject and message to the backend', async () => {
    submitContact.mockResolvedValueOnce({ data: { status: true } });
    render(<ContactUs contactRef={React.createRef()} />);

    fillForm();
    fireEvent.submit(document.querySelector('form'));

    await waitFor(() => expect(submitContact).toHaveBeenCalledTimes(1));
    expect(submitContact).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'Visitor One',
        email: 'visitor@example.com',
        phone: '0790000000',
        subject: 'Partnership',
        message: 'Tell me more about partnering.',
        botcheck: '',
      })
    );
    await waitFor(() => expect(toast.success).toHaveBeenCalled());
  });

  it('shows a retry prompt on a 5xx/network failure (SC-008)', async () => {
    submitContact.mockRejectedValueOnce({ response: { status: 500 } });
    render(<ContactUs contactRef={React.createRef()} />);

    fillForm();
    fireEvent.submit(document.querySelector('form'));

    await waitFor(() => expect(toast.error).toHaveBeenCalledWith('contactUs.errorMessage', expect.anything()));
  });
});
