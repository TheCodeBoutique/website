import React from 'react';
import styles from "./textfield.module.css";

// ==========================================================================
// Project: Alto - JavaScript Application Framework
// Copyright: @2018 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

let TextField = ({
                    action,
                    className,
                    placeholder,
                    value,
                    type
                }) => {

    const classNames = className ? `${styles.textfield} ${className}` : `${styles.textfield}`;

    return (
        action ?
            <input type={type} onChange={action} placeholder={placeholder} className={classNames} value={value}></input>
            :
            <input type={type} placeholder={placeholder} className={classNames} ></input>
    );

};

export default TextField;

