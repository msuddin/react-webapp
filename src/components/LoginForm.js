import React from "react"

// Props are like variables in a constructor
// The props in this class come from where ever the LoginForm instance is declared - see App.js
class LoginForm extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.logUserIn}>
                <input type="text" name="name" placeholder="name"/>
                <button>Login</button>
            </form>
        )
    }
}

export default LoginForm;