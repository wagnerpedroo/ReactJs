import styles from './Frase.module.css'

// console.log(styles)

function Frase() {
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>This should seems like a paragraph</p>
        </div>
    )
}

export default Frase