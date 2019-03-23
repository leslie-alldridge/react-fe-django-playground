import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import cookie from "react-cookies";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "leslie.alldri3dgwe@gmail.com",
      password1: "test123T",
      password2: "test123T"
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    var myUrl = "/accounts/signup/";
    var myData = "email=hihi%40gmail.com&password1=test123T&password2=test123T";
    axios
      .post(myUrl, myData, {
        headers: {
          "X-CSRFToken": cookie.load("csrftoken"),
          "Content-Type": "application/x-www-form-urlencoded",
          "cache-control": "no-cache"
        }
        // other configuration there
      })
      .then(function(response) {
        alert("yeah!");
        console.log(response);
      })
      .catch(function(error) {
        alert("oops");
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
