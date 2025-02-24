import React from 'react'

const Hero: React.FC = () => {
  return (
    <section
      id='home'
      className='relative h-screen flex items-center justify-center overflow-hidden'
    >
      {/* Video Background */}
      <video
        className='absolute inset-0 w-full h-full object-cover opacity-50 z-10'
        src='/videos/waterfallonleaves.mp4'
        autoPlay
        loop
        muted
        playsInline // Improves mobile compatibility
      />

      {/* Overlay with Gradient */}
      <div className='absolute inset-0 bg-gray-900/50 bg-black' />

      {/* Content */}
      <div className='relative z-20 text-center px-4'>
        <h1 className='text-5xl md:text-7xl font-extrabold tracking-tight mb-4'>
          Welcome to DV8 Water
        </h1>
        <h2 className='text-xl md:text-3xl font-light text-blue-200 mb-6'>
          Smart. Connected. Turnkey Water Management.
        </h2>
        <p className='max-w-2xl mx-auto text-lg mb-8'>
          Revolutionizing water management with advanced technology and cloud
          integration.
        </p>
        <a
          href='#contact'
          className='inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition'
        >
          Let’s Talk
        </a>
      </div>
    </section>
  )
}

export default Hero
