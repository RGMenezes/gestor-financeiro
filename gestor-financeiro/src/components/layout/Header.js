import {useNavigate} from "react-router-dom";

import logo from '../../assets/logo/logo.svg';

import styles from './Header.module.css';

function Header(){

    const navigate = useNavigate();
    const returnToHome = () => navigate('/');

    return(
        <header className={styles.header}>
            <img onClick={returnToHome} src={logo} alt="logo do site" />
        </header>
    );
};

export default Header;