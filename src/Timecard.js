import React from "react";

function Timecard() {

    function testApi() {
        fetch('https://3pp81dbn46.execute-api.us-east-1.amazonaws.com/dev')
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <div>
            <button onClick={testApi}>test api</button>
        </div>
    )
}

export default Timecard