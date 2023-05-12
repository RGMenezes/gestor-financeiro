import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

import CardTyping from '../form/CardTyping';
import Header from "../layout/Header";

import styles from "./Questions.module.css";

function Questions(){

    let user = {};

    const [stepCard, setStepCard] = useState(0);
    const [showCard, setShowCard] = useState(false);
    const navigate = useNavigate();

    function handleStep(action, step, userResp){
        
        console.log(user)
        user = Object.assign(user, userResp);

        if(step === 0){
            if(action === "back") navigate("/");
            else setStepCard(step+1);

        }else{
            if(action === "next" && questions[step+1]) setStepCard(step+1);
            else if(action === "next") navigate("/result", {state: {user: user}});
            else setStepCard(step-1);
        };
    };

    const questions = [
        {
            question: "Como podemos te chamar?",
            input: {
                name: 'name',
                type: 'text',
                text: 'Nome:',
                placeHolder: 'Digite seu nome aqui'
            },
            id: 0
        },
        {
            question: "Qual o valor médio da sua conta de energia?",
            input: {
                name: "energi",
                type: "number",
                text: "Energia:",
                placeHolder: "Digite o valor"
            },
            id: 1
        }
    ];

    return(
        <>
            <Header />
            <section className={styles.questions} >
                {useEffect(() => { setShowCard(true) }, [stepCard])}
                {showCard && (<CardTyping handleStep={handleStep} questions={questions[stepCard]} />)}
            </section>
        </>
    );
};

export default Questions;