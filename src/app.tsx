import Footer from '@layout/Footer';
import Nav from '@layout/Nav';
import About from '@sections/About';
import Contact from '@sections/Contact';
import Home from '@sections/Hero';
import Projects from '@sections/Projects';

export function App() {
  return (
    <>
      <Nav />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
