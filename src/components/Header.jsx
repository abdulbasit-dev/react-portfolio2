import React from 'react';
import './Header.css';
import SocialContact from './SocialContact';

function Header({data}) {
  console.log(data);
  return (
    <div className='header p-2 '>
      <div className='header-container d-flex justify-content-between align-items-center'>
        <nav className='borderYtoX mt-3'>
          <ul className='d-flex list-item'>
            <li className='nav-item'>
              <a href='#aboutMe' className='nav-link'>
                ABOUT ME
              </a>
            </li>
            <li className='nav-item'>
              <a href='#skills' className='nav-link'>
                SKILLS
              </a>
            </li>
            <li className='nav-item'>
              <a href='#projects' className='nav-link'>
                PROJECTS
              </a>
            </li>
            <li className='nav-item'>
              <a href='#certificate' className='nav-link'>
                certificate
              </a>
            </li>
            <li className='nav-item'>
              <a href='#contactMe' className='nav-link'>
                CONTACT ME
              </a>
            </li>
          </ul>
        </nav>
        <SocialContact data={data} />
      </div>
    </div>
  );
}

export default Header;
