import About from './Components/About'
import Header from './Components/Header'
import Projects from './Components/Projects'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

const App = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        theme="colored"
      />
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
