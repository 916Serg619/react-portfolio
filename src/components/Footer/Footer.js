import React from 'react';
import './Footer.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'> 
            <h3>Github</h3>
            <Link
              className='social-icon-link twitter'
              to="https://github.com/916Serg619"
              target='_blank'
              aria-label='Github'
            >
              <i className='fas fa-address-card' />
            </Link>
            <h3>LinkDn</h3>
            <Link
              className='social-icon-link twitter'
              to='"https://www.linkedin.com/in/sergio-aguirre-1a47a462/"'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
            <div className="h4">Email:sergioaguirre916@gmail.com</div>
            <div className="h4">Phone:916-807-0916</div>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <small className='website-rights'>Sergio Aguirre © 2021</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;