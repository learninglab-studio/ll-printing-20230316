import styles from "./Title.module.css"

const Title = (props) => {
    return (
        <h1 className={styles.BigName}>
            {props.children}
        </h1>
    )
}

export default Title