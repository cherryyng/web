import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-repeat-y bg-center'>
          <Navbar />
          <Hero />
          
        <About />
        <Experience />
        <Works />
        <div className='relative z-0'>
          <Contact />
        </div>
       </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
