import { Link } from 'react-router-dom';

import logo from "../../assets/logo/logo.svg";

import Button from '../form/Button';

import styles from './Home.module.css';

function Home(){

    return(
        <section className={styles.home}>
            <h1>Gestor financeiro</h1>
            <img src={logo} alt="logo do site" />
            <h2>Descubra a melhor maneira de gerenciar as suas finanças!</h2>

            <Link to="/questions">
                <Button
                    text="Analizar Finanças" 
                    styleMode="dark" 
                />
            </Link>
        </section>
    );
};

export default Home;