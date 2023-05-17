import React from 'react';

function About() {
  return (
    <div className="px-10 section">
      <h1 className="pt-10">About me</h1>
      <div className="flex row">
        <div className="grid grid-cols-2">
          <h2 className="px-5 mt-0">Hi, my name is <span className="font-black">Alessia</span> and I am a web developer.</h2>
          <p>I recently graduated from <a href="www.lewagon.com">Le Wagon</a>, a 9-week intensive web development bootcamp in Paris. I am passionate about learning, which is why I quickly fell in love with coding. Before that, I graduated from Columbia University with a BA in psychology with a minor in visual arts. I wear many hats and like coding with both the UX in mind (where my psychology education comes in) as well as bringing a creative eye to designing beautiful websites.</p>
        </div>
      </div>
    </div>
  )
}

export default About;
