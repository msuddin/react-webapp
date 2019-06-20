import React from "react"

// This class has two props
// It has a function as well as a string as props
class LogoutForm extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.getOut}>
                <p>{this.props.heroName}</p>
                <button>Logout</button>
            </form>
        )
    }
}

export default LogoutForm;