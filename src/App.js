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

    // make data send as form data
    var bodyFormData = new FormData();
    bodyFormData.set("email", this.state.email);
    bodyFormData.set("password1", this.state.password1);
    bodyFormData.set("password2", this.state.password2);

    //default naming for cookie and header
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

    //headers
    const headers = {
      "X-CSRFTOKEN": cookie.load("csrftoken")
    };

    axios
      .post("/accounts/signup/", bodyFormData, { headers })
      .then(data => console.log(data));
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
