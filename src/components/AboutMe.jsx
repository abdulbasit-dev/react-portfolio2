import React from 'react';

import './AboutMe.css';

function AboutMe({data}) {
  return (
    <div className='aboutMe my-5 py-4 ' id='aboutMe'>
      <h1 className='mb-5'>About Me</h1>
      <div className='aboutMe__content mt-4'>
        <div className='row mt-4'>
          <div className='col-lg-4'>
            <h3 className='aboutMe__title'>Contact</h3>
          </div>
          <div className='col-lg-8 aboutMe_contact'>
            <p className='mb-1'>
              <span className='aboutMe__contactTitle mr-1'>Email:</span> {data.contact.email}
            </p>
            <p className='my-1'>
              <span className='aboutMe__contactTitle mr-1'>Phone Number:</span>
              {data.contact.phoneNumber}
            </p>
            <p className='mt-1'>
              <span className='aboutMe__contactTitle mr-1'>Adress: </span>
              {data.contact.address}
            </p>
          </div>
        </div>
      </div>

      <div className='content mt-4'>
        {data.education.map((item, index) => (
          <div className='row mt-2' key={index}>
            <div className='col-lg-4'>
              {index === 0 && <h3 className='aboutMe__title'>Education</h3>}
            </div>
            <div className='col-lg-8 aboutMe__educationDescription' key={index}>
              <p className='mb-1 font-weight-bold'>{item.school}</p>
              <p className='my-1'>{item.degree}</p>
              <p className='mt-1 text-muted'>{item.graduated}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutMe;
