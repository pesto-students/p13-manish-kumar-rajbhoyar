import React from 'react';

function Skills() {
  return (
    <div className='mySkills'>
        <header><h1>Skills</h1></header>
        <img src={require('../images/html-tagst.jpg')} alt='html' width='400px' height='300px' />
        <img src={require('../images/css-tagst.jpg')} alt='css' width='400px' height='300px' />
        <img src={require('../images/Js-tagst.jpg')} alt='js' width='400px' height='300px' />
        <img src={require('../images/react.jpg')} alt='react' width='400px' height='300px' />
    </div>
  );
}

export default Skills;