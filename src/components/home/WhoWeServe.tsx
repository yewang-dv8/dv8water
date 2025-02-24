import React from 'react'

const WhoWeServe: React.FC = () => {
  return (
    <section className='py-20 bg-gray-800'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center mb-12'>Who We Serve</h2>
        <div className='grid md:grid-cols-3 gap-8'>
          <div className='p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition'>
            <h3 className='text-xl font-semibold mb-2'>Small Municipalities</h3>
            <p>
              Cost-effective, scalable water sourcing and distribution solutions
              for populations under 50,000.
            </p>
          </div>
          <div className='p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition'>
            <h3 className='text-xl font-semibold mb-2'>Oil & Gas Operators</h3>
            <p>
              Automated water injection, disposal, and transfer solutions to
              optimize field efficiency.
            </p>
          </div>
          <div className='p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition'>
            <h3 className='text-xl font-semibold mb-2'>
              Agricultural Irrigation
            </h3>
            <p>
              Smart water transfer and well management for sustainable crop
              production.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeServe
