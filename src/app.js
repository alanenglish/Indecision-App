import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './components/AddOption';
import Option from './components/Option';
import Options from './components/Options';
import Action from './components/Action';

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: [] // props.options
    }
  }

  // JSON.stringify - take regular JavaScript object and get the string representation
  // JSON.parse - take string representation and get true JavaScript object

  // lifecycle methods only available in class components
  componentDidMount() { // fires when component first gets mounted to DOM
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // do nothing at all if errors
    }

    console.log('componentDidMount - fetching data');
  }

  // prevProps and prevState arguments available
  componentDidUpdate(prevProps, prevState) { // fires after component updates, state or prop values change
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log('componentDidUpdate - saving data');
    }
  }

  componentWillUnmount() { // fires just before component goes away
    console.log('componentWillUnmount');
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
    // this.setState(() => {
    //   return {
    //     options: []
    //   };
    // });
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter a valid value to add';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState((prevState) => ({ options: prevState.options.concat(option)}));
    // this.setState((prevState) => {
    //   return {
    //     options: prevState.options.concat(option)
    //   }
    // })
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer.';

    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

// now that we are reading data from localStorage it doesn't make sense to allow user
// to pass a prop in anymore.
// IndecisionApp.defaultProps = {
//   options: []
// }

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
}

Header.defaultProps = {
  title: 'Indecision'
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
