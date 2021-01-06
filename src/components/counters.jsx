import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {onReset, onDelete, onIncrement, counters} = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-medium">Reset</button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            id={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
