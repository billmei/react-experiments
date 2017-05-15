import React, { Component } from 'react';
import './App.css';
// import connect from 'react-redux';

function showAlert(text) {
  return {
    type: 'SHOW_ALERT',
    text
  }
}

const mapStateToProps = (state) => (
  { alert_shown: false }
)

// const App = (store) => {
class App extends Component {
  componentDidMount() {
    this.props.store.subscribe();
  }
  render() {
    return (
      <div className="App">
        <p>Hello world</p>
        <button
          onClick={() => (this.props.store.dispatch(showAlert('hello world!')))}
        >Say hi back</button>
      </div>
    );
  }
}

export default App;
