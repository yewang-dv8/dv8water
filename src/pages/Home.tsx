import ContactForm from '../components/contactus/ContactForm'
import Footer from '../components/home/Footer'
import Header from '../components/home/Header'
import Hero from '../components/home/Hero'
import Solutions from '../components/home/Solutions'
import WhoWeServe from '../components/home/WhoWeServe'
import WhyChooseUs from '../components/home/WhyChooseUs'

const Home = () => {
  return (
    <div className='min-h-screen bg-gray-900 text-white font-sans'>
      <Header />
      <main>
        <Hero />
        <WhoWeServe />
        <Solutions />
        <WhyChooseUs />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default Home
