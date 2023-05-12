import CardTyping from '../form/CardTyping';

import styles from "./Questions.module.css";

function Questions(){

    const questionsTyping = [
        {
            question: "Como podemos te chamar?",
            input: {
                name: 'nome',
                type: 'text',
                text: 'Nome: ',
                placeHolder: 'Digite seu nome aqui'
            },
            id: 0
        },
        {
            question: "",
            input: {},
            id: 1
        }
    ]

    return(
        <section className={styles.questions} >
            <CardTyping questions={questionsTyping[0]} />
        </section>
    );
};

export default Questions;