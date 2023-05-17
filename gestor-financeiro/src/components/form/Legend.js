import styles from './Legend.module.css';

import { useState } from 'react';

function Legend({theme, text, description}){
    const [showDescription, setShowDescription] = useState(false);

    const mouseEnter = () => setShowDescription(true);
    const mouseLeave = () => setShowDescription(false);
    return(
        <>
            <p tabIndex="0" onFocus={mouseEnter} onBlur={mouseLeave} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className={`${styles.legend} ${styles[theme]}`} >{text}</p>

            <span className={`${styles.description} ${showDescription && styles.description_on}`} >{description}</span>
        </>
    );
};

export default Legend;