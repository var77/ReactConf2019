import React, { Component, useState, useEffect } from 'react';
import './Input.css';

const validateEmail = (val) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(val).toLowerCase());
};

const Input = ({ value, onChange, disabled, email, ...props }) => {

    const [isValidEmail, setEmailValid] = useState(email ? validateEmail(value) : true);

    useEffect(() => {
        email && setEmailValid(validateEmail(value));
    }, [value]);

    return (
        <div className={(isValidEmail ? 'webflow-style-input' : 'wrong-webflow-style-input')}>
            <input type="text" {...props} value={value} onChange={onChange} disabled={disabled}/>
        </div>
    );
};

export default Input;