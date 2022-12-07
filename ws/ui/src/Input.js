import React from 'react';

const Input = props => {
  const { label, name, onChange, type, defaultValue } = props; 
  


  return (
    <div >
      <label>{label}</label>
      <input  name={name} onChange={onChange} type={type} defaultValue={defaultValue} />
      <div className="invalid-feedback">{props.error}</div>
    </div>
  );
};

export default Input;