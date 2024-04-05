import React from 'react';
import './App.css';
import Home from './Components/Home';
import Footer from './Components/Footer'
import Header from './Components/Header';
import About from './Components/About';
import Skillls from './Components/Skillls'
import Work from './Components/Work';
import Contact from './Components/Contact';

function App() {

  return (
    <div>
      <header>
<Header/>
      </header>
      <section>
      {/* <Modes/> */}
      <Home/>
      <About/>
      <Skillls/>
      <Work/>
      <Contact/>
      </section>
      <footer>
        <Footer/>
      </footer>
      </div>
  );
}

export default App;
