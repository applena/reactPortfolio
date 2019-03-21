import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import './button.scss';

class Header extends React.Component{
  render(){
    return(
      <div id='header-text'>
        <header>
          <h2>Hi! I'm Lena, a Full-Stack Software Engineer</h2>
          <p>
            A background in education, photography and business with a passion for creating useful lasting applications.
          </p>
          <p>
            Lets create something amazing together.
          </p>
          <Link id="button" to={'#portfolio'}>See More</Link>
        </header>
      </div>
    );
  };
}

export default Header;