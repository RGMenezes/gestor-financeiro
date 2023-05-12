import styles from './Input.module.css';

import {useState} from "react";

function Input({name, type, text, placeHolder}){

    const [label, setLabel] = useState('')
    const [input, setInput] = useState(true)

    function focusLabel(){
        input ? setInput(false) : setInput(true)
        input ? setLabel("focus") : setLabel('')
    }

    return(
        <div className={styles.container} >
            <label className={`${styles[label]}`} htmlFor={name} >{text}</label>
            <input onFocus={focusLabel} onBlur={focusLabel} type={type} id={name} name={name} placeholder={placeHolder} />
        </div>
    );
};

export default Input;