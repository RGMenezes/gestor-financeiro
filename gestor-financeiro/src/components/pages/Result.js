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
                        theme="black"
                        arrGraphic={[
                            [50, "despesa"],
                            [75, "renda"],
                            [10, "fiis"],
                            [15, "viagens"],
                            [33, "ações"],
                            [87, "energia"],
                        ]}
                    />
                </div>
            </section>
        </main>
    );
};

export default Result;