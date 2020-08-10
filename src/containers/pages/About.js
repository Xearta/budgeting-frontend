import React from 'react';

function About() {
  return (
    <div style={aboutStyle}>
      <h1>About</h1>
      <p>This is the Budget Application v1.0.0. It is my first application with React and Redux.</p>
    </div>
  );
}

const aboutStyle = {
  textAlign: 'center',
  padding: '10px',
};

export default About;
