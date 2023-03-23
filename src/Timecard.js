import React from "react";
import { Card } from "@mui/material";
import { useState } from "react";

function Timecard() {

    const [location, setLocation] = useState("")

    return (
        <div>
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