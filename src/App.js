import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password1: "",
      password2: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);

    axios
      .post("http://localhost:8000/accounts/signup/", this.state)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>This is going to be a register form hopefully</h3>
          <form onSubmit={this.handleSubmit}>
            {/* {% csrf_token %} */}
            {/* {{ form.as_p }} */}
            <input onChange={this.handleChange} type="email" name="email" />
            <input
              onChange={this.handleChange}
              type="password"
              name="password1"
            />
            <input
              onChange={this.handleChange}
              type="password"
              name="password2"
            />

            <button type="submit">Sign up</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
