import React from 'react';
import styles from './button.module.css';

// ==========================================================================
// Project: Alto - JavaScript Application Framework
// Copyright: @2018 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

let ButtonView = ({
                      action,
                      className,
                      title
                  }) => {

    const classNames = className ? `${styles.button} ${className}` : `${styles.button}`;

    return (
        action ?
            <button onClick={action} className={classNames}>{title}</button>
            :
            <button className={classNames}>{title}</button>
    )
};

export default ButtonView;

