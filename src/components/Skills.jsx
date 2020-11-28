import React from 'react';

import './Skills.css';

function Skills({data}) {
  return (
    <div id='skills' className='skills my-5  py-5'>
      <h1 className='my-5'>Skills</h1>

      <div className='row'>
        <div className='bars'>
          <ul className='skills'>
            {data.skills.map(skills => {
              const className = 'bar-expand ' + skills.name.toLowerCase();
              return (
                <li key={skills.name}>
                  <span style={{width: skills.level}} className={className}></span>
                  <em>{skills.name}</em>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
