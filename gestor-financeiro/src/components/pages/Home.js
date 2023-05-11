import { useNavigate } from 'react-router-dom'

import logo from "../../assets/logo/logo.svg"

import Button from '../form/Button'

import styles from './Home.module.css'

function Home({showHeader}){

    showHeader(false)

    const navigate = useNavigate()

    function toQuestions(){
        showHeader(true)

        navigate("/questions")
    }

    return(
        <div className={styles.home}>
            <h1>Gestor financeiro</h1>
            <img src={logo} alt="logo do site" />
            <h2>Descubra a melhor maneira de gerenciar as suas finanças.</h2>

            <Button handleOnClick={toQuestions} text="Analizar Finanças" styleMode="dark" />
        </div>
    )
}

export default Home