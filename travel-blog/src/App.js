import heroBackground from './images/hero-background.jpg';
import './App.scss';

import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app'>
      <NavBar />
      <div className='hero-container'>
        <img className='hero-img' src={heroBackground} alt='hero image' />
      </div>
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
