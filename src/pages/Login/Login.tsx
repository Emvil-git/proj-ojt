import React from "react";
import useBEM from "../../hooks/useBEM";

const Login = () => {
    const [B, E] = useBEM('login')
    return (
        <div className={B()}>
            <header className={E('header')}>
                <h3>OJT App</h3>
                <h5>LOG IN</h5>
            </header>

            <form className={E('form')}>
                <input type="text" />
                <input type="text" />
                <input type="button" value="LOG IN" />
            </form>
        </div>
    )
}

export default Login;