import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { FetchData } from "./utils/services";
import { URL } from "./utils/configs";

class App extends React.Component {
  state = {
    resolve: "nothing.",
  };

  callApi = async () => {
    console.log("You are in call API!")
    let data = await FetchData(
      `${URL.protocol}://${URL.baseURL}:${URL.port}/apis/testapi`
    );
    if (data){
      if (data.status === 200) {
        this.setState({ resolve: data.resolve });
      }else {
        console.log("corrupted data : ", data)
      }
    }else {
      console.log("corrupted data : ", data)
    }
    
  };

  render() {
    return (
      <div className="App">
        <h1>hello there!!</h1>
        <p>{this.state.resolve}</p>
        <button onClick={this.callApi}>pleeeeeease!</button>
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </div>
    );
  }
}

export default App;
