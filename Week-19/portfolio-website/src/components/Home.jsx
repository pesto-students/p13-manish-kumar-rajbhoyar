import React from 'react';

function Home() {
  return (
    <div className='homePage'>
      <div className='profilePic'>
        <img src={require('../images/profilePic.jpeg')} alt='profile' width='500px' height='400px' />
      </div>
      <div className='profileDetails'>
        <h2>Raj Bhoyar</h2>
        <p>I like to study new things. Being knowledgeable about web development is an ongoing process, and I’m always proactive about seeking new opportunities to develop and grow in my role. Those opportunities could be in the form of training, a conference, listening to a speaker, or taking on a new project, but the motivation is to increase my knowledge of the field.</p>
      </div>
    </div>
  );
}

export default Home;