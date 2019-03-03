// import * as React from "react";
// import * as ReactDOM from "react-dom";

// class App extends React.Component{
//     constructor(props, state){
//         super(props, state);

//         this.state ={
//             counter: 0
//         }
//     }
//     render(){
//         return(
//             <div>
//                 <button onClick={()=> this.minus()}>Minus</button>
//                 <span>{' '}{this.state.counter}{' '}</span>
//                 <button onClick = {() => {
//                     this.setState({counter: this.state.counter +1})
//                 }}>Plus</button>
//                 </div>
//         )
//     }
//     minus() {
//         this.setState({
//             counter: this.state.counter -1
//         });
//     }
// }

// ReactDOM.render(<App/>, document.getElementById("root"))

import React, { Component } from "react";
import * as ReactDOM from "react-dom";
import List from "./List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(event) {
    this.setState({ term: event.target.value }, () => {
    });
  }
  onSubmit(event) {
    event.preventDefault();
    this.setState({
      term: "",
      items: [...this.state.items, this.state.term]
    });
  }
  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
        <h1>Welcome</h1>
            <h3>To your to-do list</h3>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
