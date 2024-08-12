import React from 'react';

const TextInput = ({ label, id, type = "text", placeholder, required = true, value, onChange }) => {
  return (
    <div className="form-group">
      <label className="py-2" htmlFor={id}>{label}</label>
      <input 
        type={type} 
        className="form-control form-control-lg border border-1 border-black rounded-pill" 
        id={id} 
        placeholder={placeholder} 
        required={required} 
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
