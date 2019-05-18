import React from 'react';

const Checkbox = ({ checked, onCheck }) => {
    return <input width={30} height={30} type="checkbox" checked={checked} onChange={onCheck} />;
};

export default Checkbox;