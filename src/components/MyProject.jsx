import React from 'react';

import './MyProject.css';

function MyProject({data}) {
  return (
    <div className='myProject  py-5' id='projects'>
      <h1>My Project</h1>
      <div className='row mt-5'>
        {data.projects.map((project, index) => (
          <div className='col-lg-4 my-3 ' key={index}>
            <a href={project.liveUrl} className='a' target='_blanck'>
              <div className='card  project-card'>
                <img src={project.screenShot} className='card-img-top' alt='...' />
                <div className='card-body'>
                  <h5 className='card-title'>{project.name}</h5>
                  <div>
                    {project.technology.map(tech => (
                      <span key={tech} className='topic-tag'>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className='mt-4 d-flex  justify-content-between pr-3'>
                    <a href={project.source} target='_blanck' className='card-link'>
                      Source Code
                    </a>
                    <a href={project.liveUrl} target='_blanck' className='card-link'>
                      Live Preview
                    </a>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProject;
