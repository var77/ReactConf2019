import React from 'react';

const Checkbox = ({ checked, onCheck }) => {
    return <input className="checkboxStyle" type="checkbox" checked={checked} onChange={onCheck} />;
};

export default Checkbox;