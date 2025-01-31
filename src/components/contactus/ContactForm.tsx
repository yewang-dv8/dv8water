import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

const apiUrl = 'http://localhost:3000/api/dv8contact_us'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    'g-recaptcha-response': '',
    marketingConsent: true,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const onCaptchaChange = (token: string | null) => {
    setFormData({ ...formData, 'g-recaptcha-response': token || '' })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})
    setSuccessMessage('')

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      if (response.ok) {
        setSuccessMessage('Email sent successfully!')
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          'g-recaptcha-response': '',
          marketingConsent: true,
        })
      } else {
        setErrors({ form: data.status || 'Failed to send message' })
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setErrors({ form: 'An error occurred. Please try again later.' })
    }

    setIsSubmitting(false)
  }

  return (
    <section id='contact' className='py-16 bg-gray-100'>
      <div className='max-w-lg mx-auto px-4'>
        <h2 className='text-2xl font-bold mb-6 text-center'>
          Get More Information
        </h2>

        {successMessage && <p className='text-green-600'>{successMessage}</p>}
        {errors.form && <p className='text-red-600'>{errors.form}</p>}

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              Name
            </label>
            <input
              id='name'
              name='name'
              type='text'
              onChange={handleChange}
              value={formData.name}
              className='w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-600'
              required
            />
          </div>

          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              Email
            </label>
            <input
              id='email'
              name='email'
              type='email'
              onChange={handleChange}
              value={formData.email}
              className='w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-600'
              required
            />
          </div>

          <div>
            <label
              htmlFor='message'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              Message
            </label>
            <textarea
              id='message'
              name='message'
              onChange={handleChange}
              value={formData.message}
              className='w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-600'
              required
            />
          </div>

          <ReCAPTCHA
            sitekey={import.meta.env.VITE_RECAPTCHA_V2_SITE_KEY}
            onChange={onCaptchaChange}
            className='my-5'
          />

          <button
            type='submit'
            className='w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
