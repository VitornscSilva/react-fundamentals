import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function Header({ theme, onToggleTheme, title, children }) {
  return (
    <>
      <h1>{title}</h1>
      <Button theme={theme} onClick={onToggleTheme}>
        Change Theme
      </Button>
      {children}
    </>
  )
}

Header.proptypes = {
  onToggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}

Header.defaultProps = {
  title: "React's Blog",
}