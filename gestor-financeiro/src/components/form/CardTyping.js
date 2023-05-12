import Input from './Input';
import Button from './Button';

import styles from './Card.module.css';
import { useState } from 'react';

function CardTyping({questions, handleStep}){

    const [required, setRequired] = useState(false);

    function nextStep(e){
        const resp = document.querySelector("Input").value;

        setRequired(false)

        e.preventDefault();
        if(resp) handleStep("next", questions.id, resp);
        else setRequired(true);
    };

    function backStep(e){
        e.preventDefault();
        handleStep("back", questions.id);
    };

    return(
        <form className={styles.card}>
            <h1>{questions.question}</h1>
            <Input 
                name={questions.input.name}
                type={questions.input.type}
                text={questions.input.text}
                placeHolder={questions.input.placeHolder}
                required={required}
            />
            <div className={styles.buttons}>
                <Button
                    text="Voltar"
                    handleOnClick={backStep}
                />
                <Button 
                    text="Continuar"
                    handleOnClick={nextStep}
                    styleMode="dark"
                />
            </div>
        </form>
    );
};

export default CardTyping;