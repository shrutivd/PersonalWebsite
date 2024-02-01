import React from 'react';
import '../../css/skills/skill.css';

function Skills() {
  return (
    <div className='about'>
      <div className='row_1'>
        <div className='frontend'>
        <h2>Frontend:</h2>
        <div className='list'>
        <p className='skill_name'>HTML</p>
        <p className='skill_name'>CSS</p>
        <p className='skill_name'>Javascript</p>
        </div>
        <div className='list'>
        <p className='skill_name'>Typescript</p>
        <p className='skill_name'>React</p>
        <p className='skill_name'>Responsive Design</p>
        </div>
        </div>
        <div className='backend'>
        <h2 >Backend:</h2>
        <div className='list'>
        <p className='skill_name'>Node.js</p>
        <p className='skill_name'>Python</p>
        <p className='skill_name'>axios</p>
        </div>
        <div className='list'>
        <p className='skill_name'>Java</p>      
        </div>
        </div>
        <div className='database'>
        <h2 >Database:</h2>
          <div className='list'>
        <p className='skill_name'>SQL</p>
        <p className='skill_name'>MySQL</p>
        <p className='skill_name'>PostgreSQL</p>
        </div>
        </div>
      </div>
      
      <div className='row_2'>
        <div className='framework'>
        <h2 >Framework:</h2>
          <div className='list'>
        <p className='skill_name'>Fastify</p>
        <p className='skill_name'>Django</p>
        <p className='skill_name'>Flask</p>
        </div>
         <div className='list'>
        <p className='skill_name'>Bootstrap</p>
        </div>
        </div>
        <div className='containers'>
        <h2 >Containers:</h2>
          <div className='list'>
        <p className='skill_name'>Docker</p>
        </div>
        </div>
        <div className='cloud'>
        <h2 >Cloud Computing Platform:</h2>
          <div className='list'>
        <p className='skill_name'>GCP</p>
        <p className='skill_name'>AWS</p>
        </div>
        </div>
      </div>
      <div className='row_3'>
        <div className='vc'>
        <h2 >Version control:</h2>
         <div className='list'>
        <p className='skill_name'>Git</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
