class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleSubtractOne = this.handleSubtractOne.bind(this);
    this.handleResetCount = this.handleResetCount.bind(this);

    this.state = {
      count: 0 // props.count
    };
  }

  componentDidMount() {
    const stringCount = localStorage.getItem('count');
    const count = parseInt(stringCount, 10);

    if (!isNaN(count)) {
      this.setState({ count });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
    // this.setState({ count: this.state.count + 1 });
  }

  handleSubtractOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
    // this.setState({ count: this.state.count - 1 });
  }

  handleResetCount() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleSubtractOne}>-1</button>
        <button onClick={this.handleResetCount}>Reset</button>
      </div>
    );
  }
}


// now that we are reading data from localStorage it doesn't make sense to allow user
// to pass a prop in anymore.
// Counter.defaultProps = {
//   count: 0
// }

ReactDOM.render(<Counter />, document.getElementById('app'));
