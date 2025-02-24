import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

const apiUrl = 'https://email-service-lemon.vercel.app/api/dv8contact_us'

const ContactForm: React.FC = () => {
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
    <section
      id='contact'
      className='py-20 bg-gradient-to-br from-gray-800 to-blue-900 text-white'
    >
      <div className='max-w-lg mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center mb-8'>Let’s Talk</h2>
        <p className='text-lg text-center text-gray-300 mb-8'>
          Partner with us to deploy next-generation water management solutions.
        </p>

        {successMessage && (
          <p className='text-blue-400 text-center mb-6'>{successMessage}</p>
        )}
        {errors.form && (
          <p className='text-red-400 text-center mb-6'>{errors.form}</p>
        )}

        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-300 mb-2'
            >
              Name
            </label>
            <input
              id='name'
              name='name'
              type='text'
              onChange={handleChange}
              value={formData.name}
              className='w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
              placeholder='Enter your name'
              required
            />
          </div>

          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-300 mb-2'
            >
              Email
            </label>
            <input
              id='email'
              name='email'
              type='email'
              onChange={handleChange}
              value={formData.email}
              className='w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
              placeholder='Enter your email'
              required
            />
          </div>

          <div>
            <label
              htmlFor='phone'
              className='block text-sm font-medium text-gray-300 mb-2'
            >
              Phone
            </label>
            <input
              id='phone'
              name='phone'
              type='text'
              onChange={handleChange}
              value={formData.phone}
              className='w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
              placeholder='Enter your phone number'
              required
            />
          </div>

          <div>
            <label
              htmlFor='company'
              className='block text-sm font-medium text-gray-300 mb-2'
            >
              Company
            </label>
            <input
              id='company'
              name='company'
              type='text'
              onChange={handleChange}
              value={formData.company}
              className='w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
              placeholder='Enter your company name'
              required
            />
          </div>

          <div>
            <label
              htmlFor='message'
              className='block text-sm font-medium text-gray-300 mb-2'
            >
              Message
            </label>
            <textarea
              id='message'
              name='message'
              onChange={handleChange}
              value={formData.message}
              className='w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
              placeholder='Tell us about your needs'
              rows={4}
              required
            />
          </div>

          <div className='flex justify-center'>
            <ReCAPTCHA
              sitekey={import.meta.env.VITE_RECAPTCHA_V2_SITE_KEY}
              onChange={onCaptchaChange}
            />
          </div>

          <button
            type='submit'
            className='w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed'
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
