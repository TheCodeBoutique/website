import React from 'react';

// ==========================================================================
// Project: Alto - JavaScript Application Framework
// Copyright: @2018 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

const ListView = ({
                      children,
                      data,
                      className,
                      id = 'id'
                  }) => {
    if (!data) {
        return (
            <ul className={className}></ul>
        )
    }

    return (
        <ul className={className}>
            {data.map(hash =>
                (<li key={hash[id]}>{React.cloneElement(children, {data: hash})}</li>)
            )}
        </ul>
    )
};

export default ListView;

