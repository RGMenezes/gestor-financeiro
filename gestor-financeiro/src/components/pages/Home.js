import styles from './Home.module.css'

function Home({showHeader}){

    showHeader(false)
    
    return(
        <div className={styles.home}>
            Home
        </div>
    )
}

export default Home