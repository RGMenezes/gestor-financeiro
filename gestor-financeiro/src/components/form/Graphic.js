import { useEffect, useState } from 'react';
import styles from './Graphic.module.css';

function Graphic({arrGraphic}){

    const [showBar, setShowBar] = useState([]);

    function barPositioning(bar){
        const barHeight = arrGraphic[bar][0];
        const barWidth = (900 / arrGraphic.length) * 0.9;
        const barX = ((900 / arrGraphic.length) - (barWidth / 2)) * (bar + 1);

        showBar.push(<line x1={barX} x2={barX} y1={barHeight} y2='700' strokeWidth={barWidth} />);
    };

    return(
        <svg className={styles.graphic}
            viewBox='0 0 1000 1000'
        >
            {useEffect( () => {
                for(let contI = 0; contI < arrGraphic.length; contI++){

                    barPositioning(contI);
                    console.log(showBar)

                    //(<line x1={} x2={} y1={} y2='700' strokeWidth={} />
                    //<text x='220' y='1325' >Ações Int.</text>)
                };

            }, [arrGraphic])}

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