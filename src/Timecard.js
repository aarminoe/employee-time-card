import React from "react";
import { Card } from "@mui/material";
import { useState } from "react";

function Timecard() {

    const [location, setLocation] = useState("")

    function testApi() {
        fetch('https://3pp81dbn46.execute-api.us-east-1.amazonaws.com/dev')
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <div>
            <button onClick={testApi}>test api</button>
            <Card>
                <div>
                    <h1>Timecard</h1>
                    <div>
                        <input onChange={(e) => setLocation(e.target.value)}></input>
                        <button>Clock in</button>
                        <button>Clock out</button>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Timecard