import React from 'react';

function AboutMe() {
  return (
    <section className="about-me-container my-5">
      <div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="../assets/avatar/Avatar.png" uk-img>
        <img src="../src/assets/avatar/Avatar.png" alt="" />
      </div>      
      <div className="about-text-container">
        <p>
          Hi there! I'm Daniel Zavala, a passionate developer with a love for building
          innovative web applications.
        </p>
        <p>
          I thrive on challenges and enjoy turning complex problems into elegant
          solutions. My tech stack includes React, JavaScript, and more. Whether it's
          front-end development or diving into back-end systems, I'm always excited to
          learn and grow in the ever-evolving world of web development.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
