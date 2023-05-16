import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

import CardTyping from '../form/CardTyping';
import CardChoice from '../form/CardChoice';
import Header from "../layout/Header";

import styles from "./Questions.module.css";

let user = {};

function Questions(){

    const [stepCard, setStepCard] = useState(0);
    const [updateCard, setUpdateCard] = useState(0);
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
            question: "Qual o seu nome?",
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
            question: "Qual a sua renda líquida mensal?",
            input: {
                name: 'wage',
                type: 'number',
                text: 'Salário:',
                placeHolder: 'Digite o seu salário'
            },
            id: 1
        },
        {
            type: "typing",
            question: "Qual a sua renda extra mensal?",
            input: {
                name: 'extra_income',
                type: 'number',
                text: 'Extra:',
                placeHolder: 'Digite o valor aqui'
            },
            id: 2
        },
        {
            type: "choice",
            question: "Você é responsavel por alguém?",
            name: "responsible_for_someone",
            choices: {
                choice1: ["Sim, por 1 pessoa", 1],
                choice2: ["Sim, por 2 pessoas", 2],
                choice3: ["Sim, mas de 2 pessoa", 3],
                choice4: ["Não, apenas cuido de mim mesmo", 0]
            },
            id: 3
        },
        {
            type: "typing",
            question: "Quantos filhos você tem?",
            input: {
                name: 'children',
                type: 'number',
                text: 'Filhos:',
                placeHolder: 'Quantidade de filhos'
            },
            id: 4
        },
        {
            type: "choice",
            question: "Qual a sua contribuição nas despesas mensais de sua família?",
            name: "family_responsibility",
            choices: {
                choice1: ["Contribu-o com menos da metade", 1],
                choice2: ["Contribu-o com a metade", 2],
                choice3: ["Contribu-o com mais da metade", 3],
                choice4: ["Não contrubu-o", 0]
            },
            id: 5
        },
        {
            type: "typing",
            question: "Qual o valor de sua conta de energia?",
            input: {
                name: 'energy',
                type: 'number',
                text: 'Energia:',
                placeHolder: 'Valor pago'
            },
            id: 6
        },
        {
            type: "typing",
            question: "Qual o valor de sua conta de água?",
            input: {
                name: 'water',
                type: 'number',
                text: 'Água:',
                placeHolder: 'Valor pago'
            },
            id: 7
        },
        {
            type: "typing",
            question: "Qual o valor de sua conta de internet?",
            input: {
                name: 'internet',
                type: 'number',
                text: 'Internet:',
                placeHolder: 'Valor pago'
            },
            id: 8
        },
        {
            type: "typing",
            question: "Qual o valor do seu aluguel?",
            input: {
                name: 'rent',
                type: 'number',
                text: 'Aluguel:',
                placeHolder: 'Valor pago'
            },
            id: 9
        },
        {
            type: "typing",
            question: "O quanto você gasta mensalmente com alimentação?",
            input: {
                name: 'food',
                type: 'number',
                text: 'Alimentação:',
                placeHolder: 'Valor gasto'
            },
            id: 10
        },
        {
            type: "typing",
            question: "O quanto você gasta mensalmente com outras coisas que são indispensáveis?",
            input: {
                name: 'other_indespensable',
                type: 'number',
                text: 'Outros:',
                placeHolder: 'Valor gasto'
            },
            id: 11
        },
        {
            type: "typing",
            question: "O quanto você gasta mensalmente com cartão de crédito?",
            input: {
                name: 'credit_card',
                type: 'number',
                text: 'Cartão:',
                placeHolder: 'Valor gasto'
            },
            id: 12
        },
        {
            type: "typing",
            question: "O quanto você gasta mensalmente com empréstimos e financiamentos?",
            input: {
                name: 'loan_financing',
                type: 'number',
                text: 'Valor:',
                placeHolder: 'Empréstimos e financiamento mensal'
            },
            id: 13
        },
        {
            type: "typing",
            question: "O quanto você gasta mensalmente com outros tipos de faturas?",
            input: {
                name: 'other_invoices',
                type: 'number',
                text: 'Fatura:',
                placeHolder: 'Valor gasto'
            },
            id: 14
        },
        {
            type: "typing",
            question: "O quanto você gasta mensalmente com lazer?",
            input: {
                name: 'leisure',
                type: 'number',
                text: 'Lazer:',
                placeHolder: 'Valor gasto'
            },
            id: 15
        },
        {
            type: "typing",
            question: "O quanto você gasta mensalmente com entretenimento?",
            input: {
                name: 'entertainment',
                type: 'number',
                text: 'Entretenimento:',
                placeHolder: 'Valor gasto'
            },
            id: 16
        },
        {
            type: "typing",
            question: "O quanto você gasta mensalmente com viagens?",
            input: {
                name: 'trips',
                type: 'number',
                text: 'Viagens:',
                placeHolder: 'Valor gasto'
            },
            id: 17
        },
        {
            type: "typing",
            question: "Quais outros gastos dispensáveis mensais você tem?",
            input: {
                name: 'other_dispensable',
                type: 'number',
                text: 'Outros:',
                placeHolder: 'Valor gasto'
            },
            id: 18
        },
        {
            type: "typing",
            question: "Quanto de dinheiro você guarda por mês?",
            input: {
                name: 'box',
                type: 'number',
                text: 'Caixa:',
                placeHolder: 'Valor guardado em caixa'
            },
            id: 19
        },
        {
            type: "typing",
            question: "Quanto de dinheiro você investe em fundos imobiliários por mês?",
            input: {
                name: 'real_estate',
                type: 'number',
                text: 'Fiis:',
                placeHolder: 'Valor investido'
            },
            id: 20
        },
        {
            type: "typing",
            question: "Quanto de dinheiro você investe em ações nacionais por mês?",
            input: {
                name: 'national_stocks',
                type: 'number',
                text: 'Ações:',
                placeHolder: 'Valor investido'
            },
            id: 21
        },
        {
            type: "typing",
            question: "Quanto de dinheiro você investe em ações internacionais por mês?",
            input: {
                name: 'international_shares',
                type: 'number',
                text: 'Ações:',
                placeHolder: 'Valor investido'
            },
            id: 22
        },
        {
            type: "typing",
            question: "Quanto de dinheiro você investe em ativos de risco como bitcoin, nfts, etc por mês?",
            input: {
                name: 'risk_assets',
                type: 'number',
                text: 'Valor:',
                placeHolder: 'Ativos de risco'
            },
            id: 23
        },
        {
            type: "typing",
            question: "O quanto você investe em outros tipos de investimentos mensalmente?",
            input: {
                name: 'other_investments',
                type: 'number',
                text: 'Outros:',
                placeHolder: 'Valor investido'
            },
            id: 24
        },
        {
            type: "choice",
            question: "Como você avalia seus investimentos?",
            name: "investment_evaluation",
            choices: {
                choice1: ["Invisto mal", 1],
                choice2: ["Poderia investir melhor", 2],
                choice3: ["Gosto de como invisto", 3],
                choice4: ["Não invisto", 0]
            },
            id: 25
        },
        {
            type: "choice",
            question: "Qual o seu nível de conhecimento sobre investimentos?",
            name: "investment_knowledge",
            choices: {
                choice1: ["Sei o básico", 1],
                choice2: ["Sei um pouco de tudo", 2],
                choice3: ["Conheço bem", 3],
                choice4: ["Não sei nada", 0]
            },
            id: 26
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
                                setUpdateCard(stepCard);
                            }, 200);
                        }, 200);
                    }else{
                        setCardStyle("card_back");
                        setTimeout(() => {
                            setCardStyle("card_next"); 
                            setTimeout(() => {
                                setCardStyle('');
                                setUpdateCard(stepCard);
                            }, 200);
                        }, 200);
                    };
                }, [stepCard, cardStyleBack, cardStyleBackStep0])}
                {showCard && (
                    <div className={`${styles[cardStyle]} ${styles.card}`}>
                        { questions[updateCard].type === "typing" && (
                            <CardTyping
                                handleStep={handleStep}
                                questions={questions[updateCard]}
                            />
                        )}
                        { questions[updateCard].type === "choice" && (
                            <CardChoice 
                                handleStep={handleStep}
                                questions={questions[updateCard]}
                            />
                        )}
                    </div>
                )}
            </section>
        </>
    );
};

export default Questions;