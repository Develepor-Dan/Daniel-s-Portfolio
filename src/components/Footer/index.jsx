import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const socialMediaLinks = [
  {
    name: 'GitHub',
    iconClass: 'fab fa-github',
    link: 'https://github.com/Develepor-Dan',
  },
  {
    name: 'LinkedIn',
    iconClass: 'fab fa-linkedin',
    link: 'https://www.linkedin.com/in/daniel-zavala-lopez-363b132aa/',
  },
  {
    name: 'Stack Overflow',
    iconClass: 'fab fa-stack-overflow',
    link: 'https://stackoverflow.com/users/21981301/daniel-zavala-lopez',
  },
];

function Footer() {
  return (
    <footer className="flex-row px-1">
      {socialMediaLinks.map((socialMedia) => (
        <a
          href={socialMedia.link}
          key={socialMedia.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={socialMedia.iconClass}></i>
        </a>
      ))}
    </footer>
  );
}

export default Footer;
