import React from 'react';

import './SocialContact.css';

function SocialContact({data}) {
  return (
    <div className='socialIcon text-white'>
      {data.social.map(icon => (
        <a href={icon.url} key={icon.className} target='_blanck'>
          <i className={`${icon.className} mr-4`}></i>
        </a>
      ))}
    </div>
  );
}

export default SocialContact;
