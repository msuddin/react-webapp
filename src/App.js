import React from "react";
import Titles from "./components/Titles"
import LoginForm from "./components/LoginForm"
import LogoutForm from "./components/LogoutForm"

// Class extends component which has a render method in it
class App extends React.Component {

    // State - this is used to keep track of any changes in the component
    // State contains key value pairs
    state = {
        heroName: null,
        loggedOn: false
    };

    // the makeup of the signature of the below functions binds the constructor as part of the function signature
    logUserIn = async (e) => {
        // Line below stops the page from refreshing when this method is called
        e.preventDefault();

        const heroName = await fetch(`http://localhost:8080/hi/${e.target.elements.name.value}`)
            //.then(function(response) {
            .then((response) => response.json())
            .then((parsedData) => parsedData.message);

        this.setState({
            heroName: heroName,
            loggedOn: true
        })
    };

    logUserOut = async (e) => {
        e.preventDefault();
        this.setState({
            loggedOn: false
        })
    };

    // render method below define props where a prod can be a function or variable
    // Once you assign props in this render method, the props become available in the component classes themselves
    render() {
        // Return method returns JSX
        if (!this.state.loggedOn) {
            return (
                <div>
                    <Titles/>
                    <LoginForm logUserIn={this.logUserIn}/>
                </div>
            )
        } else {
            return (
                <div>
                    <LogoutForm heroName={this.state.heroName} logUserOut={this.logUserOut}/>
                </div>
            )
        }
    }
}

// In order to allow other files to see this, we need to export it
export default App;