import { BrowserRouter } from "react-router-dom";

import { About, Contact, Certificates, Hero, Navbar, Tech, Works, StarsCanvas, VoiceTrigger} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Certificates />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <VoiceTrigger />
      </div>
    </BrowserRouter>
  );
}

export default App;