import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Title from '../Title';

import { ThemeContext } from '../../context/ThemeContext';

export default function Header({ title, children }) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Title>{title}</Title>
      <Button onClick={onToggleTheme}>
        Change Theme
      </Button>
      {children}
    </>
  )
}

Header.proptypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}

Header.defaultProps = {
  title: "React's Blog",
}