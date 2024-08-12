import React from 'react';

const SelectInput = ({ label, id, options, required = true }) => {
  return (
    <div className="form-group">
      <label className="py-2" htmlFor={id}>{label}</label>
      <select 
        className="form-select form-select-lg border border-1 border-black rounded-pill custom-radio" 
        id={id} 
        required={required} 
        defaultValue=""
      >
        <option value="" disabled>Select {label.toLowerCase()}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
