import React from 'react'

const chooseDv8Reasons = [
  {
    title: 'Smart Technology',
    desc: 'Machine learning, predictive analytics, and automation optimize every drop.',
  },
  {
    title: 'Cloud-Connected',
    desc: 'Real-time visibility and remote operation via secure cloud platforms.',
  },
  {
    title: 'Turnkey Deployment',
    desc: 'Ready-to-go solutions from design to installation.',
  },
  {
    title: 'Certified Security',
    desc: 'SOC II Type II certified systems for safety and compliance.',
  },
]

const WhyChooseUs: React.FC = () => {
  return (
    <section className='py-20 bg-gray-800 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-4xl font-bold text-center mb-12'>
          Why Choose DV8 Water?
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {chooseDv8Reasons.map((reason, index) => (
            <div key={index} className='flex items-start space-x-4'>
              <div className='w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0'>
                {index + 1}
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2'>{reason.title}</h3>
                <p className='text-gray-300'>{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
