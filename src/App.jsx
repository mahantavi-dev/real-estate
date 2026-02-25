import About from './components/about'
import Header from './components/header'
import Projects from './components/projects'
import Testimonials from './components/testimonials'
import Contact from './components/contact'
import Footer from './components/footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
