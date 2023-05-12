import Input from './Input';
import Button from './Button';

import styles from './Card.module.css';

function CardTyping({questions}){

    function teste(){}

    return(
        <form className={styles.card}>
            <h1>{questions.question}</h1>
            <Input 
                name={questions.input.name}
                type={questions.input.type}
                text={questions.input.text}
                placeHolder={questions.input.placeHolder}
            />
            <div>
                <Button
                    text="Voltar"
                    handleOnClick={teste}
                />
                <Button 
                    text="Continuar"
                    handleOnClick={teste}
                    styleMode="dark"
                />
            </div>
        </form>
    );
};

export default CardTyping;