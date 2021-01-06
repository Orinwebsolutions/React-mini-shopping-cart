import React, { Component } from "react";
import Counters from "./components/counters";
import Navbar from "./navbar";

class Apps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        { id: 1, value: 0 },
        { id: 2, value: 5 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
      ],
    };
  }
  handleDelete = (counterID) => {
    const counters2 = this.state.counters;
    const result = counters2.filter((item) => item.id !== counterID);
    console.log(result);
    this.setState({ counters: result });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = [...this.state.counters];
    counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounter={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}
export default Apps;
