import React from 'react';
import './button.css';

function Button(props) {
  return <div data-testid="button" className="button-style">{props.label}</div>
}

export default Button;