import "./App.css";
import Layout from "./Components/Layout/Layout";
import MobileNav from "./Components/MobileNav/MobileNav";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Education from "./Pages/Education/Education";
import Footer from "./Pages/Footer/Footer";
import Projects from "./Pages/Projects/Projects";
import TechStack from "./Pages/TechStacks/TechStack";
import WorkExp from "./Pages/WorkExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";
function App() {
  return (
    <>
      <MobileNav />
      <Layout />
      <div className="container">
        <About />
        <Education />
        <TechStack />
        <Projects />
        <WorkExp />
        <Contact />
        <Footer />
      </div>

      <ScrollToTop smooth />
    </>
  );
}

export default App;
