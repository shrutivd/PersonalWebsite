import React from 'react';
import '../../css/skills/skill.css';

function Skills() {
  return (
    <div>
      <div className='row_1'>
        <div className='frontend'>
        <h2>Frontend:</h2>
        <div className='list'>
        <h3 className='skill_name'>HTML</h3>
        <h3 className='skill_name'>CSS</h3>
        <h3 className='skill_name'>Javascript</h3>
        </div>
        <div className='list'>
        <h3 className='skill_name'>Typescript</h3>
        <h3 className='skill_name'>React</h3>
        <h3 className='skill_name'>Responsive Design</h3>
        </div>
        </div>
        <div className='backend'>
        <h2 >Backend:</h2>
        <div className='list'>
        <h3 className='skill_name'>Node.js</h3>
        <h3 className='skill_name'>Python</h3>
        <h3 className='skill_name'>axios</h3>
        </div>
        <div className='list'>
        <h3 className='skill_name'>Java</h3>      
        </div>
        </div>
        <div className='database'>
        <h2 >Database:</h2>
          <div className='list'>
        <h3 className='skill_name'>SQL</h3>
        <h3 className='skill_name'>MySQL</h3>
        <h3 className='skill_name'>PostgreSQL</h3>
        </div>
        </div>
      </div>
      
      <div className='row_2'>
        <div className='framework'>
        <h2 >Framework:</h2>
          <div className='list'>
        <h3 className='skill_name'>Fastify</h3>
        <h3 className='skill_name'>Django</h3>
        <h3 className='skill_name'>Flask</h3>
        </div>
         <div className='list'>
        <h3 className='skill_name'>Bootstrap</h3>
        </div>
        </div>
        <div className='containers'>
        <h2 >Containers:</h2>
          <div className='list'>
        <h3 className='skill_name'>Docker</h3>
        </div>
        </div>
        <div className='cloud'>
        <h2 >Cloud Computing Platform:</h2>
          <div className='list'>
        <h3 className='skill_name'>GCP</h3>
        <h3 className='skill_name'>AWS</h3>
        </div>
        </div>
      </div>
      <div className='row_3'>
        <div className='vc'>
        <h2 >Version control:</h2>
         <div className='list'>
        <h3 className='skill_name'>Git</h3>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
