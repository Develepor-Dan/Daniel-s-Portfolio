import React from 'react';

function Resume() {
  return (
    <section className="my-5 flex-row flex-center">
      <div className="my-2">
        <p>
          ***Resume in progress***
          {/* Download my <a href="https://www.linkedin.com/">resume</a> */}
        </p>

        <div>
          <h3>Front-end Proficiencies</h3>
          <ul className="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>

        <div>
          <h3>Back-end Proficiencies</h3>
          <ul className="skills">
            <li>APIs</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
