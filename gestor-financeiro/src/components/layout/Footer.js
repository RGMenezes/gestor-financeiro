import {BsGithub, BsLinkedin, BsHddStackFill} from 'react-icons/bs'

import styles from './Footer.module.css'

function Footer(){
    return(
        <footer className={styles.footer} >
            <nav>
                <a rel='noreferrer external' target='_blank' href="https://github.com/RGMenezes">
                    <BsGithub className={styles.icon} />
                    <p>@RGMenezes</p>
                </a>
                <a rel='noreferrer external' target='_blank' href="https://www.linkedin.com/in/rafael-menezes-16b002246/">
                    <BsLinkedin className={styles.icon} />
                    <p>@RafaelMenezes</p>
                </a>
                <a rel='noreferrer external' target='_blank' href="https://github.com/RGMenezes/gestor-financeiro">
                    <BsHddStackFill className={styles.icon} />
                    <p>Repositório</p>
                </a>
            </nav>
            <p>Gestor financeiro &copy; 2023</p>
        </footer>
    )
}

export default Footer