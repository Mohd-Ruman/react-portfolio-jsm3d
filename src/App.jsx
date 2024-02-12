import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Techcards, Hero, Navbar, Works, StarsCanvas} from './components';

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-norepeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        {/* <Tech/> */}
        <Techcards/>
        <Works/>
        {/* <Feedbacks/> */}
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
