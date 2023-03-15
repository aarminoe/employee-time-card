import React, { useState } from "react";


function Login() {

    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")

    console.log(user)
    console.log(pass)

    return(
        <div>
            <form>
                <p>user:</p>
                <input onChange={(e) => setUser(e.target.value)}/>
                <p>password:</p>
                <input type={"password"} onChange={(e) => setPass(e.target.value)}/>
            </form>

        </div>
    )
}

export default Login