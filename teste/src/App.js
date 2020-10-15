import React from 'react';
import './App.css';

var dataLayer = window.dataLayer || [];

function reportSubmit() {
  dataLayer.push(
    {
      'event': 'submitForm',
      'eventCategory': 'clicks', 
      'eventAction': 'click_button_submit', 
      'eventValue': 'admin',
    });
}

function reportMouseLeaveBottomBox() {
  dataLayer.push(
    {
      'event': 'mouseLeaveBottomBox',
      'eventCategory': 'mouse_leave', 
      'eventAction': 'mouse_leave_bottom_Box', 
      'eventValue': 'professor',
    });
}


function App() {
  function rendleSubmit(event) {
    event.preventDefault()
    reportSubmit()
  }

  function mouseLeaveBottomBox(event) {
    event.preventDefault()
    reportMouseLeaveBottomBox()
  }

  return (
    <div className="App">
      <p>v4</p>
      <form id="signup-form" onSubmit={rendleSubmit}>
        <input type="text"></input>
        <button type="submit">Submit</button>
      </form>
      <br/>
      <a target="_blank" rel="noopener noreferrer" href="https://www.google.com">Google</a>
      <div className="bottombox" onMouseLeave={mouseLeaveBottomBox}>
      </div>
    </div>
  );
}

export default App;
