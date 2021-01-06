import React, { Component } from "react";

class Counter extends Component {
  style = {
    fontSize: 15,
    fontWeight: "bold",
  };
  render() {
    const {onIncrement,onDelete, counter } = this.props;
    return (
      <div>
        <span style={this.style} className={this.getBadgeClass(counter)}>
          {counter.value}
        </span>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-primary mx-2"
        >
          Increments
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-primary mx-2"
        >
          Delete
        </button>
      </div>
    );
  }
  //Both function are equal
  // getBadgeClass(counter) {
    // let classes = "badge m-2 badge-";
    // classes += (counter.value === 0) ? "primary" : "success";
    // return classes;
  // }
  //Below funtion called as arrow functions, 
  //This is very helpful when we accessing states, unless it this key work refer that
  //current funtions
  getBadgeClass = (counter) => {
    let classes = "badge m-2 badge-";
    classes += (counter.value === 0) ? "primary" : "success";
    return classes;
  }

}

export default Counter;
