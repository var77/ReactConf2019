import React, { Component, useState, useEffect } from 'react';

const validateEmail = (val) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(val).toLowerCase());
};

const Input = ({ value, onChange, disabled, email, ...props }) => {

    const [isValidEmail, setEmailValid] = useState(email ? validateEmail(value) : true);

    useEffect(() => {
        email && setEmailValid(validateEmail(value));
    }, [value]);

    return <input type="text" {...props} value={value} onChange={onChange} disabled={disabled}
                  style={{ borderColor: isValidEmail ? '#66ce66' : 'red', outline: 'none', offset: 'none', boxShadow: 'none' }}/>;
};

export default Input;