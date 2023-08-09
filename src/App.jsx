import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Navbar, Feedback, Header, Tech, Works} from './components';

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
        <Works />
        <Feedback />
        <div>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
