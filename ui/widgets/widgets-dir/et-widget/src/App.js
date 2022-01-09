import {getData} from "./integration/Integration";
import {useState} from "react";

function App() {
    const [payload, setPayload] = useState("")

    async function callTheApi() {
        const responseObj = await getData();
        if (responseObj["response"]) {
            setPayload(responseObj.response.data.payload)
        }else{
            setPayload(responseObj.error.message)
        }
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
