import Nav from '@components/Nav';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';

export function App() {
  return (
    <>
      <Nav />
      <main>
        <Home />
        <AboutMe />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
