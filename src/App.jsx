import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Navbar, Feedback, Header, Tech, Projects} from './components';

const App = () => {


  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Header />
        </div>
        <About />
        <Experience />
        <Tech />
        <Projects />
        <Feedback />
        <div>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
