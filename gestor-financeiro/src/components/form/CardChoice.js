import ButtonChoice from './ButtonChoice';

import styles from './CardChoice.module.css';

function CardChoice({questions, handleStep}){

    function selectedChoice(arr){
        const resp = {[questions.name]: arr[1]};
        handleStep("next", questions.id, resp);
    };

    return(
        <section className={styles.card}>
            <h1>{questions.question}</h1>
            <div className={styles.buttons}>
                <ButtonChoice
                    handleOnClick={selectedChoice.bind(this, questions.choices.choice1)}
                    text={questions.choices.choice1[0]}
                />
                <ButtonChoice
                    handleOnClick={selectedChoice.bind(this, questions.choices.choice2)}
                    text={questions.choices.choice2[0]}
                />
                <ButtonChoice
                    handleOnClick={selectedChoice.bind(this, questions.choices.choice3)}
                    text={questions.choices.choice3[0]}
                />
                <ButtonChoice
                    handleOnClick={selectedChoice.bind(this, questions.choices.choice4)}
                    text={questions.choices.choice4[0]}
                />
            </div>
        </section>
    );
};

export default CardChoice;