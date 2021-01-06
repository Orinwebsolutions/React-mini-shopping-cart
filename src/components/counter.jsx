import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //     value:0
  // };

  style = {
    fontSize: 15,
    fontWeight: "bold",
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: this.props.counter.value,
  //     url: "https://picsum.photos/300",
  //   };
  // }

  render() {
    return (
      <div>
        {}
        <span style={this.style} className={this.getBadgeClass()}>
          {/* {this.state.value} */}
          {this.props.counter.value}
        </span>
        <button
          // onClick={() => this.handleBtnClick()}
          onClick={()=> this.props.onIncrement(this.props.counter)}
          className="btn btn-primary mx-2"
        >
          Increments
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-primary mx-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "primary" : "success";
    return classes;
  }

  // handleBtnClick() {
  //   // console.log('btn click',this);
  //   // let value = this.state.value;
  //   this.setState({ value: this.props.counter.value + 1 });
  // }
}

export default Counter;
