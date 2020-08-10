import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Budget Application</h1>
      <Link style={linkStyle} to='/budget'>
        Budget
      </Link>{' '}
      |{' '}
      <Link style={linkStyle} to='/reports'>
        Reports
      </Link>{' '}
      |{' '}
      <Link style={linkStyle} to='/about'>
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  top: 0,
  position: 'sticky',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
};

export default Header;
