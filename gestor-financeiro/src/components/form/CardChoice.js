import Button from './Button';

import styles from './Card.module.css';

function CardChoice({questions, handleStep}){

    function nextStep(e){
        e.preventDefault();
        handleStep("next", questions.id, [questions.choice[1]]);
    };

    function backStep(e){
        e.preventDefault();
        handleStep("back", questions.id);
    };

    return(
        <form className={styles.card}>
            <h1>{questions.question}</h1>
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

export default CardChoice;