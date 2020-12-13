import React from 'react';

import clasess from './Input.module.css'
const input = (props) => {
    let inputElement = null;
    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={clasess.InputElement}
                {...props.elementConfig}
                onChange={props.changed}
                value={props.value} />;
            break;
        case ('text'):
            inputElement = <textarea
                className={clasess.InputElement}
                {...props.elementConfig}
                onChange={props.changed}
                value={props.value} />;
            break;
        case ('select'):
            inputElement = (
                <select
                    className={clasess.InputElement}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.vaulue} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input className={clasess.InputElement} {...props.elementConfig} value={props.value} />
    }

    return (
        <div className={clasess.Input}>
            <label>{props.label}</label>
            {inputElement}
        </div>
    );

}



export default input;