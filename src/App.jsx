import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Navbar, Feedback, Hero, Tech, Works} from './components';

const App = () => {


  return (
    <BrowserRouter>
      <div>
        <div>
          <Navbar />
          <Hero />
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
