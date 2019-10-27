import React from 'react';
import './FormField.css';

export default function FormField({
  label, value, setValue, redacted = false,
}) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="FormField">
      <div className="form-input">
        <span>{label}</span>
        <input
          type={redacted ? 'password' : 'text'}
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
