import React from 'react';

const Divider = ({ text }) => {
  return (
    <div className="divider-container">
      <hr className="divider" />
      <span className="divider-text text-white">{text}</span>
      <hr className="divider" />
    </div>
  );
};

export default Divider;