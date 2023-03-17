import styles from "./Subtitle.module.css"

const Subtitle = (props) => {
    return (
        <h3 classname={styles.Subtitle}>{props.children}</h3>
    )
}

export default Subtitle