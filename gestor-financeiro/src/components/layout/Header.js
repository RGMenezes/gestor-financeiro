import {Link} from "react-router-dom";

import logo from '../../assets/logo/logo.svg';

import styles from './Header.module.css';

function Header(){
    return(
        <header className={styles.header}>
            <Link to='/'><img src={logo} alt="logo do site" /></Link>
        </header>
    );
};

export default Header;