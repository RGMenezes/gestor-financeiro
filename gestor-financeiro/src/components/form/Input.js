import styles from './Input.module.css';

import { useState } from "react";

function Input({name, type, text, placeHolder, required}){

    const [label, setLabel] = useState('');
    const [input, setInput] = useState(true);

    function focusLabel(){
        input ? setInput(false) : setInput(true);
        input ? setLabel("focus") : setLabel('');
    };

    return(
        <div className={styles.container} >
            <label
                className={`${required && styles['required_label']} ${styles[label]}` } 
                htmlFor={name} 
            >
                {text}
            </label>

            <input 
                className={`${required && styles['required_input']}`} 
                onFocus={focusLabel} onBlur={focusLabel} 
                type={type} id={name} name={name} placeholder={placeHolder}
            />
        </div>
    );
};

export default Input;