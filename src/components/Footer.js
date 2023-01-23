import React from 'react';
// Here we are importing a CSS file as a dependency
//import '../styles/Header.css';

function Footer() {
    return (
        <footer className="w-100 mt-auto bg-secondary p-4">
          <div className="container text-center mb-5">
            <h4>
              Made with{' '}
              <span
                className="emoji"
                role="img"
                aria-label="heart"
                aria-hidden="false"
              >
                ❤️
              </span>{' '}
              by the Tech Thoughts team.
            </h4>
          </div>
        </footer>
      );
    };

export default Footer;