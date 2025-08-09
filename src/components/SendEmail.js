import React from 'react'
import { useState } from 'react';
import { toast } from 'react-hot-toast';
function SendEmail() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleSendEmail = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: JSON.stringify({ name: 'Hamza Hisham', email: 'hamzahhisham306@gmail.com', message: 'Hello World' }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success('Email sent successfully');
      } else {
        toast.error('Failed to send email');
      }
    } catch (error) {
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>',error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }
    return (
      <>
      {isLoading ? (
        <button className='bg-blue-500 p-2 border-r-4 text-white font-bold' type='button'>Sending...</button>
      ) : (
        <button onClick={handleSendEmail} className='bg-blue-500 p-2 border-r-4 text-white font-bold' type='button'>Send Email</button>
      )}
      </>
    )
  }

  export default SendEmail