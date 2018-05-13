import React from 'react';
import styles from './checkbox.module.css';

// ==========================================================================
// Project: Alto - JavaScript Application Framework
// Copyright: @2018 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

const Checkbox = ({
                      className,
                      id,
                      title,
                      name,
                      value,
                      isChecked,
                      action
                  }) => {

    const classNames = className ? `${styles.checkbox} ${className}` : `${styles.checkbox}`;

    return (
        <div className={classNames}>
            <input checked={isChecked} type="checkbox" id={id} name={name} value={value} onChange={action}/>
            <label htmlFor={id}>{title}</label>
        </div>
    );

};

export default Checkbox;