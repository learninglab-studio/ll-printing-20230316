import styles from "./MDFApplication.module.css"
import Title from "@/components/printing/Title"
import Subtitle from "@/components/printing/Subtitle"
import NameAndPronouns from "@/components/printing/NameAndPronouns"
import { Stringify } from "../utilities"

const MDFApplication = (props) => {
    return (
        <div className={styles.container}>
            <Title>MDF Application</Title>
            <NameAndPronouns name={props.application.fields.Name} pronouns={props.application.fields.Pronouns} />
            
            <Stringify data={props.application} />
        </div>
    )
}

export default MDFApplication