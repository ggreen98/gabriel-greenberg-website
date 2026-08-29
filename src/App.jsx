import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonial from './components/Testimonial';
import OtherWork from './components/OtherWork';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Testimonial />
        <OtherWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
