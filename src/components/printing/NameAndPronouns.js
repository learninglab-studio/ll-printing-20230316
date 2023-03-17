import styles from "./NameAndPronouns.module.css"
import Subtitle from "./Subtitle"
const NameAndPronouns = (props) => {
    return (
        <div>
            <Subtitle>{props.name}</Subtitle>
            <h4 className={styles.pronouns}><i>{props.pronouns}</i></h4>
        </div>
    )
}

export default NameAndPronouns