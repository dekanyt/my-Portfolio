// import LogoSection from "./section/LogoSection"
import NavBar from "./components/NavBar"
import FeatureCards from "./section/FeatureCards"
import Hero from "./section/hero"
import ShowCaseSection from "./section/ShowCaseSection"
// import Experience from "./section/Experience"
import TechStack from "./section/TechStack"
// import Testimonial from "./section/Testimonial"
import Contact from "./section/Contact"
import Footer from "./section/Footer"

function App() {
  return (
<>
  
  <NavBar/>
  <Hero/>
  <ShowCaseSection/>
  {/* <LogoSection/> */}
  <FeatureCards/>
  {/* <Experience/> */}
  <TechStack/>
  {/* <Testimonial/> */}
  <Contact/>
  <Footer/>
</>
  )
}

export default App