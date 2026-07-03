// Form submissions for the static site. There is no backend of our own — the
// three forms POST to Web3Forms (https://web3forms.com), a hosting-agnostic form
// endpoint that emails submissions to the address tied to the access key.
//
// Set NEXT_PUBLIC_WEB3FORMS_KEY to your free access key (Next.js only exposes
// NEXT_PUBLIC_* vars to the browser).
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || ''

// POST a set of fields to Web3Forms. `botcheck` is the honeypot — Web3Forms
// rejects the submission if it's non-empty. Throws on any non-success so callers
// can show a retry toast without clearing the form.
async function submitForm(fields) {
  if (!ACCESS_KEY) {
    throw new Error('Web3Forms access key is not configured (NEXT_PUBLIC_WEB3FORMS_KEY).')
  }

  const res = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ access_key: ACCESS_KEY, ...fields }),
  })

  let data = {}
  try {
    data = await res.json()
  } catch {
    // non-JSON response (e.g. gateway error) — treat as failure below
  }

  if (!res.ok || data.success === false) {
    const err = new Error(data.message || 'Submission failed')
    err.status = res.status
    throw err
  }
  return data
}

export function submitContact({ botcheck = '', ...payload }) {
  return submitForm({
    subject: `New contact request: ${payload.subject || ''}`.trim(),
    from_name: payload.name,
    botcheck,
    ...payload,
  })
}

export function submitCaptainRegistration({ botcheck = '', ...payload }) {
  return submitForm({
    subject: 'New captain registration',
    from_name: payload.full_name,
    botcheck,
    ...payload,
  })
}

export function submitRestaurantRegistration({ botcheck = '', ...payload }) {
  return submitForm({
    subject: 'New restaurant registration',
    from_name: payload.name,
    botcheck,
    ...payload,
  })
}
