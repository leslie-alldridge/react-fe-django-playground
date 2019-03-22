import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import cookie from "react-cookies";

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
    const token = cookie.load("csrftoken");
    console.log(token);

    axios
      .post("http://localhost:8000/accounts/signup/", this.state, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "X-CSRFToken": token
        }
      })
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

            <input
              placeholder="email"
              onChange={this.handleChange}
              type="email"
              name="email"
            />
            <input
              placeholder="pw1"
              onChange={this.handleChange}
              type="password"
              name="password1"
            />
            <input
              placeholder="pw2"
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
