import { findRecordByValue } from "@/lib/utils/airtable-tools"
import llog from "@/lib/utils/ll-loggers"
import { Stringify } from "@/components/utilities"
import MDFApplication from "@/components/printing/MDFApplication"
const Page = (props) => {
    return (
        <div>
            <MDFApplication application={props.application} />
        </div>
    )
    
}

export async function getServerSideProps(context) {
    try {
      llog.red("accessing airtable")
      const atData = await findRecordByValue({
        baseId: process.env.AIRTABLE_BASE_ID,
        table: "MDFApplications",
        view: "ForPrinting",
        field: "AirtableURL",
        value: context.params.slug
      })
      // logging the data to the (server-side) console
      llog.cyan(atData)
      // Pass data to the page via props
      // we just need to do one little thing first:
      let theData = JSON.parse(JSON.stringify(atData))
      return { props: {
            application: theData
        } }
    } catch (error) {
      // if there's an error we send the user to a 404
      llog.red(`no data`)
        return {
          notFound: true,
        }
    }
    
  }


export default Page

