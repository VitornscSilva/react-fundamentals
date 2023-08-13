import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

import { ThemeContext } from './ThemeContext';

export default function Header({ title, children }) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: '#ccc',
        fontFamily: 'sans-serif',
      }}
    >
      <h1>{title}</h1>
      <Button onClick={onToggleTheme}>
        Change Theme
      </Button>
      {children}
    </div>
  )
}

Header.proptypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}

Header.defaultProps = {
  title: "React's Blog",
}