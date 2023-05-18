import React from 'react';

function About() {
  return (
    <div className="px-10 section">
      <div className="py-20">
        <h2 className="mt-20">
          Hi, I'm <span className="font-black">Alessia</span>.
        </h2>
        <h1 className="me-20 pe-20 text-start">
          I am a <span className="font-black keyword">Web Developer</span> and I make websites that people love.
        </h1>
      </div>
      <div>
        <div className="flex row">
          <div className="grid grid-cols-2">
            <div className="">
              <p>
                I am proficient in both Backend and Frontend skills like React.js, Tailwind CSS, SaSS, Css3 and many more.
              </p>
            {/* Personal story : Dedicate a page to the developer's personal story, highlighting her journey into web development, her motivations, and any challenges she overcame. Make it relatable and engaging to create a connection with visitors. */}

            {/* Education and Certifications: Include information about the developer's educational background, relevant certifications, and any boot camps or online courses completed. Highlight notable achievements or projects completed during these learning experiences. */}
              <p>
                I recently completed <a href="www.lewagon.com">Le Wagon</a>, a 9-week intensive web development bootcamp in Paris. I am passionate about learning, which is why I quickly fell in love with coding.
              </p>
              <p>
                Before that, I graduated from Columbia University with a BA in psychology with a minor in visual arts. I wear many hats and like coding with both the UX in mind (where my psychology education comes in) as well as bringing a creative eye to designing beautiful websites.
              </p>
            </div>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
