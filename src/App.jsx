import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { useRef } from 'react'
import './App.css'
import LandingPage from './components/LandingPage'
import About from './components/About'
import Work from './components/Work'
import Testimonial from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Order from './components/Order'
import Captcha from './components/Captcha'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element = {<Home />}/>
          <Route path='/order' element = {<OrderPage />}/>
          <Route path='/captcha' element = { <CaptchaPage /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

function OrderPage(){
  return(
    <div className='App'>
      <Order />
    </div>
  )
}

function CaptchaPage(){
  return (
    <div className='App'>
      <Captcha /> 
    </div>
  )
}

function Home() {
  const aboutRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === 'about') {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'testimonials') {
      testimonialsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'contact') {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='App'>
      <Navbar isCaptchaPage={false} scrollToSection={scrollToSection} />
      <LandingPage />
      <div ref={aboutRef}>
        <About />
      </div>
      <Work />
      <div ref={testimonialsRef}>
        <Testimonial />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}


export default App
