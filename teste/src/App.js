import React from 'react';

var dataLayer = window.dataLayer || [];

function reportClickButton1() {
  dataLayer.push(
    {
      'event': 'submitForm',
      'eventCategory': 'clicks', 
      'eventAction': 'click_button_1', 
      'eventValue': 'admin',
    });
}

function reportMouseLeaveButton1() {
  dataLayer.push(
    {
      'event': 'onMouseLeave',
      'eventCategory': 'onMouseLeave', 
      'eventAction': 'onMouseLeave_button_1', 
      'eventValue': 'professor',
    });
}

function App() {
  function rendleClickButton1(event) {
    event.preventDefault()
    reportClickButton1()
  }

  function rendleMouseLeaveButton1(event) {
    event.preventDefault()
    reportMouseLeaveButton1()
  }

  return (
    <div className="App" style={{minHeight:1800 + 'px'}}>
      <p>v4</p>
      <form id="signup-form" onSubmit={rendleClickButton1}>
        <button type="submit" className="button2">Button 2</button>
      </form>
      <button onMouseLeave={rendleMouseLeaveButton1} className="button1">Button 1</button>
      <a target="_blank" rel="noopener noreferrer" href="https://www.google.com">Google</a>
    </div>
  );
}

export default App;
