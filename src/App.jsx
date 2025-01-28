import React from 'react'
import Navbar from './Components/Navbar'
import Work from './Components/Work'
import Stripes from './Components/Stripes'
import Cards from './Components/Cards'
import Marquees from './Components/Marquees'
import Boxes from './Components/Boxes'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (<>
    <div className="w-full min-h-screen bg-zinc-900 sm: overflow-y-hidden">
      <Navbar />
      <Work />
      <Stripes />
      <Cards />
      <Marquees />
      <Boxes />
      <Footer />
    </div>
    
    </>
  )
}

export default App