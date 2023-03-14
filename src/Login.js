import React, { useState } from "react";


function Login() {

    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")

    console.log(user)
    console.log(pass)

    return(
        <div>
            <form>
                <input onChange={(e) => setUser(e.target.value)}/>
                <input onChange={(e) => setPass(e.target.value)}/>
            </form>

        </div>
    )
}

export default Login