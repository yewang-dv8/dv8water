import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className='relative w-full h-screen flex items-center justify-center text-white bg-gray-900'>
      <video
        className='absolute inset-0 w-full h-full object-cover opacity-50'
        src='/videos/waterfallonleaves.mp4'
        autoPlay
        loop
        muted
      />

      <div className='relative text-center px-6 font-nunito'>
        <p className='text-5xl md:text-6xl font-extrabold leading-tight animate-fade-in mb-12'>
          DV8 Water
        </p>
        <p className='mt-4 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in delay-200 font-nunito'>
          Developing IIoT solutions for the water industry to reduce water usage
          and lower power consumption with advanced software, sensors, and
          machine learning models.
        </p>
        <a
          href='#contact'
          className='mt-6 inline-block px-8 py-3 text-lg font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 transition-all animate-fade-in delay-400'
        >
          Learn More
        </a>
      </div>
    </section>
  )
}

export default Hero
