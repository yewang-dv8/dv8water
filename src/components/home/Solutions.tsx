import React from 'react'

const Solutions: React.FC = () => {
  return (
    <section id='solutions' className='py-20 bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center mb-12'>Our Solutions</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='p-6 bg-gray-800 rounded-lg'>
            <h3 className='text-xl font-semibold mb-2'>
              Water Injection & Disposal
            </h3>
            <p>
              Automated, cloud-connected systems with smart VFDs and real-time
              monitoring.
            </p>
          </div>
          <div className='p-6 bg-gray-800 rounded-lg'>
            <h3 className='text-xl font-semibold mb-2'>Water Transfer</h3>
            <p>
              Intelligent pipeline and pump management with IoT-enabled remote
              control.
            </p>
          </div>
          <div className='p-6 bg-gray-800 rounded-lg'>
            <h3 className='text-xl font-semibold mb-2'>Source Water Wells</h3>
            <p>
              Advanced automation and AI-driven insights for sustainable well
              management.
            </p>
          </div>
          <div className='p-6 bg-gray-800 rounded-lg'>
            <h3 className='text-xl font-semibold mb-2'>Municipal Solutions</h3>
            <p>
              Smart infrastructure with secure cloud integration for scalable
              water systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions
