import React, { useState } from "react";
import { Card } from "@mui/material";


function Login() {

    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")

    console.log(user)
    console.log(pass)

    return(
        <Card>
            <form>
                <p>user:</p>
                <input onChange={(e) => setUser(e.target.value)}/>
                <p>password:</p>
                <input type={"password"} onChange={(e) => setPass(e.target.value)}/>
            </form>

        </Card>
    )
}

export default Login