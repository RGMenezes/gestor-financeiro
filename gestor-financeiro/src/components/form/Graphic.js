import { useEffect, useState } from 'react';
import styles from './Graphic.module.css';

function Graphic({theme, arrGraphic}){
    const [showBar, setShowBar] = useState();
    const [showTextBar, setShowTextBar] = useState();

    return(
        <svg className={`${styles.graphic} ${styles[theme]}`}
            viewBox='0 0 1000 1000'
        >
            {useEffect( () => {
                const arrGraphicLength = arrGraphic.length;
                let arrBar = [];
                let arrTextBar = [];
                for(let contBar = 0; contBar < arrGraphicLength; contBar++){
                    
                    const barHeight = ((100 - arrGraphic[contBar][0]) * 600) / 100 + 100;
                    const barWidth = (900 / arrGraphicLength) * 0.8;
                    const barX = (900 / arrGraphicLength) * contBar + ( 100 + (900 / arrGraphicLength) / 2);

                    arrBar.push(<line key={contBar + 1} x1={barX} x2={barX} y1={barHeight ? barHeight : 700} y2='700' strokeWidth={barWidth} />);
                    arrTextBar.push(<text key={contBar + 1 * 100} x='220' y={1515 - barX} >{arrGraphic[contBar][1]}</text>);

                    setShowBar(arrBar);
                    setShowTextBar(arrTextBar);
                };
            }, [arrGraphic])}

            {showBar}
            {showTextBar}

            <text className={styles.number} x='0' y='115' >100</text>
            <text className={styles.number} x='22.5' y='265' >75</text>
            <text className={styles.number} x='22.5' y='415' >50</text>
            <text className={styles.number} x='22.5' y='565' >25</text>
            <text className={styles.number} x='45' y='715' >0</text>

            <line className={styles.line_fixed} x1='103.5' x2='75' y1='100' y2='100' />
            <line className={styles.line_fixed} x1='100' x2='75' y1='250' y2='250' />
            <line className={styles.line_fixed} x1='100' x2='75' y1='400' y2='400' />
            <line className={styles.line_fixed} x1='100' x2='75' y1='550' y2='550' />
            <line className={styles.line_fixed} x1='100' x2='100' y1='100' y2='700' />
            <line className={styles.line_fixed} x1='1000' x2='75' y1='700' y2='700' />
        </svg>
    );
};

export default Graphic;