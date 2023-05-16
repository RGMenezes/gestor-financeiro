import { useLocation } from "react-router-dom";

import Header from "../layout/Header";

import styles from './Result.module.css';
import Graphic from "../form/Graphic";

function Result(){

    const location = useLocation();
    const user = location.state.user;
    console.log(user);
    
    return(
        <main className={styles.body_result} >
            <Header />
            <h1>Resultado</h1>
            <section className={styles.result_graphic}>
                <div>
                    <Graphic
                        arrGraphic={[[50, "Brasil"], [10, "França"], [20, "Noruega"], [15, "EUA"], [5, "China"]]}
                    />
                </div>
            </section>
        </main>
    );
};

export default Result;