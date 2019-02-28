import React from 'react';

const Checkbox = ({ checked, onCheck }) => {
    return <input type="checkbox" checked={checked} onChange={onCheck} />;
};

export default Checkbox;