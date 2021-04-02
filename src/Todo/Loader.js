import React from 'react';

export default () => (
  <div className="loader-wrapper">
    <svg className="loader" viewBox="0 0 128 128">
      <g>
        <circle cx="16" cy="64" r="16" fill="#005dac"/>
        <circle cx="16" cy="64" r="14.344" fill="#005dac" transform="rotate(45 64 64)"/>
        <circle cx="16" cy="64" r="12.531" fill="#005dac" transform="rotate(90 64 64)"/>
        <circle cx="16" cy="64" r="10.75" fill="#005dac" transform="rotate(135 64 64)"/>
        <circle cx="16" cy="64" r="10.063" fill="#005dac" transform="rotate(180 64 64)"/>
        <circle cx="16" cy="64" r="8.063" fill="#005dac" transform="rotate(225 64 64)"/>
        <circle cx="16" cy="64" r="6.438" fill="#005dac" transform="rotate(270 64 64)"/>
        <circle cx="16" cy="64" r="5.375" fill="#005dac" transform="rotate(315 64 64)"/>
        <animateTransform 
          attributeName="transform" 
          type="rotate" 
          values="0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64" 
          calcMode="discrete" 
          dur="720ms" 
          repeatCount="indefinite">
        </animateTransform>
      </g>
    </svg>	
  </div>  
);
