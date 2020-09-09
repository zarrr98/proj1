import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { FetchData, PutData } from "./utils/services";
import { URL } from "./utils/configs";

class App extends React.Component {
  state = {
    resolve: "nothing.",
    value: "",
    error: "",
  };

  onChangeInput = (event) => {
    console.log("val iin changeInput is : ", event.target.value);
    this.setState({ value: event.target.value , error: ""});
  };

  callApi = async () => {
    console.log("You are in call API!");
    let { value } = this.state;
    if (value) {
      let data = await PutData(
        `${URL.protocol}://${URL.baseURL}:${URL.port}/testapi`,
        { name: this.state.value }
      );
      if (data) {
        if (data.status === 200) {
          this.setState({ resolve: data.resolve.name });
        } else {
          console.log("corrupted data : ", data);
          this.setState({error: "مشکلی پیش آمده"})
        }
      } else {
        console.log("corrupted data : ", data);
        this.setState({error: "مشکلی پیش آمده"})
      }
    } else {
      this.setState({error : "لطفا نام خود را در فرم بنویسید"});
    }
  };

  render() {
    return (
      <div className="App">
        <h1>hello there!!</h1>
        <input
          type="text"
          value={this.state.value}
          onChange={this.onChangeInput}
        ></input>
        <p className="resolve-text">{this.state.resolve}</p>
        <p>what a pleasant deasent</p>
        <button onClick={this.callApi}>submit name</button>
        <p>test [from develop branch]</p>
        <p>ends with meetings in parking lots. [from feature/second-feature branch]</p>
        <p>{this.state.error}</p>
      </div>
    );
  }
}

export default App;
