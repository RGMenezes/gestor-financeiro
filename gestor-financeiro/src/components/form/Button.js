import styles from "./Button.module.css";

function Button({handleOnClick, text, styleMode}){
    return(
        <button onClick={handleOnClick} className={`${styles.button} ${styles[styleMode]}`} >{text}</button>
    );
};

export default Button;