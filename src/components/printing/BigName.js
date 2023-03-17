import styles from "./BigName.module.css"

const BigName = (props) => {
    return (
        <h1 className={styles.BigName}>{props.children}</h1>
    )
}

export default BigName