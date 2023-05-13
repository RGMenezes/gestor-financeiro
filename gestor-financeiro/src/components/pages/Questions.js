import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

import CardTyping from '../form/CardTyping';
import CardChoice from '../form/CardChoice';
import Header from "../layout/Header";

import styles from "./Questions.module.css";

let user = {};

function Questions(){

    const [stepCard, setStepCard] = useState(0);
    const [showCard, setShowCard] = useState(false);
    const [cardStyle, setCardStyle] = useState('');
    const [cardStyleBack, setCardStyleBack] = useState(false);
    const [cardStyleBackStep0, setCardStyleBackStep0] = useState(true);
    const navigate = useNavigate();

    function handleStep(action, step, userResp){
        
        user = Object.assign(user, userResp);

        if(step === 0){
            if(action === "back"){
                navigate("/");
            }else{
                setStepCard(step+1); 
                setCardStyleBack(false);
            };

        }else{
            setCardStyleBackStep0(false);

            if(action === "next" && questions[step+1]){ 
                setStepCard(step+1); 
                setCardStyleBack(false);
            }else if(action === "next"){ 
                navigate("/result", {state: {user: user}});
                setCardStyleBack(false);
            }else{ 
                setStepCard(step-1); 
                setCardStyleBack(true);
            };
        };
    };

    const questions = [
        {
            type: "typing",
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
            type: "typing",
            question: "Qual o valor médio da sua conta de energia?",
            input: {
                name: "energy",
                type: "number",
                text: "Energia:",
                placeHolder: "Digite o valor"
            },
            id: 1
        },
        {
            type: "typing",
            question: "E da sua conta de água?",
            input: {
                name: "water",
                type: "number",
                text: "Água:",
                placeHolder: "Digite o valor"
            },
            id: 2
        },
        {
            type: "choice",
            question: "Teste",
            choices: {
                choice1: ["pergunta", "resp"],
                choice2: ["pergunta", "resp"],
                choice3: ["pergunta", "resp"],
                choice4: ["pergunta", "resp"]
            },
            id: 3
        }
    ];

    return(
        <>
            <Header />
            <section className={styles.questions} >
                {useEffect(() => {
                    if(stepCard === 0 && cardStyleBackStep0){
                        setShowCard(true);
                        setCardStyle("card_next");
                        setTimeout(() => {
                            setCardStyle('');
                        }, 50);
                    }else if(cardStyleBack){
                        setCardStyle("card_next"); 
                        setTimeout(() => {
                            setCardStyle("card_back");
                            setTimeout(() => {
                                setCardStyle('');
                                setShowCard(true); 
                            }, 200);
                        }, 200);
                    }else{
                        setCardStyle("card_back"); 
                        setTimeout(() => {
                            setCardStyle("card_next"); 
                            setTimeout(() => {
                                setCardStyle('');
                                setShowCard(true);
                            }, 200);
                        }, 200);
                    };
                }, [stepCard])}
                {showCard && (
                    <div className={`${styles[cardStyle]} ${styles.card}`}>
                        { questions[stepCard].type === "typing" && (
                            <CardTyping
                                handleStep={handleStep}
                                questions={questions[stepCard]}
                            />
                        )}
                        { questions[stepCard].type === "choice" && (
                            <CardChoice 
                                handleStep={handleStep}
                                questions={questions[stepCard]}
                            />
                        )}
                    </div>
                )}
            </section>
        </>
    );
};

export default Questions;