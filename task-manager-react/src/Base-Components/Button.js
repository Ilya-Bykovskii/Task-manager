import React from 'react';

export default function Button({props}) {
    const classNames = props.className,
        text = props.text,
        handler = props.handler;

    return (
        <button 
            className={classNames}
            onClick={handler}
        >
            {text}
        </button>
    )
}