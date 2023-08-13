import React from 'react';
import PropTypes from 'prop-types'

export default function Button({ theme, children, onClick }) {
  return (
    <button 
      onClick={onClick}
      style={{ 
          color: theme === 'dark' ? '#fff' : '#000',
          background: theme === 'dark' ? '#000': '#fff',
       }}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
}