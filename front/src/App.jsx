import { Accordion } from "./common/accordion"
import { useEffect } from "react"
import { request } from "./utils/request"

function App() {
    useEffect(() => {
        request
            .get("/health")
            .then(console.log)
            .catch((error) => console.log(error))
    }, [])
    return (
        <>
            <Accordion title="hello">
                <ul>
                    <li>Hello world!!</li>
                    <li>Hello world!!</li>
                    <li>Hello world!!</li>
                    <li>Hello world!!</li>
                </ul>
            </Accordion>
        </>
    )
}

export default App
