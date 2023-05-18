import React from 'react';
import About from './About';
import Experience from './Experience';
import Work from './Work';
import Contact from './Contact';
import { Element } from 'react-scroll';

function Home() {
  return (
    <div className="prose w-screen">
      <Element id="about"><About /></Element>
      {/* <div className="divider"></div> */}
      <Element id="experience"><Experience /></Element>
      <Element id="work"><Work /></Element>
      <Element id="contact"><Contact /></Element>
    </div>
  );
}

export default Home;
