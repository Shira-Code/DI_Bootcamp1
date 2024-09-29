import { useContext } from "react"
import { AppContext } from "../App"

const ShowCounter = () =>{

    const {count} = useContext(AppContext)
    return (
        <>
            <h2>ShowCounter</h2>
            <h1>{count}</h1>
        </>
    )
}
export default ShowCounter