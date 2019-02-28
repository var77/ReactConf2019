import React from 'react';

const Input = ({ value, onChange, disabled }) => {
    return <input type="text" value={value} onChange={onChange} disabled={disabled} />;
};

export default Input;