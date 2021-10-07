import {getData} from "./integration/Integration";
import {useState} from "react";

function App() {
    const [payload, setPayload] = useState("")
    async function callTheApi() {
        setPayload((await getData()).data.payload)
    }

    return (
        <>
            <div>
                <button onClick={callTheApi}>call the api</button>
            </div>
            <div>
                <span>{payload}</span>
            </div>
        </>
    )
}

export default App
