import styles from './ButtonChoice.module.css'

function ButtonChoice({handleOnClick, text}){
    return(
        <button 
            className={styles.button} 
            onClick={handleOnClick}
        >
            {text}
        </button>
    );
};

export default ButtonChoice;