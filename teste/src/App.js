import React from 'react';

var dataLayer = window.dataLayer || [];

function reportClickButton1() {
  console.log('click_button_1')
  dataLayer.push(
    {
      'eventCategory': 'clicks', 
      'eventAction': 'click_button_1', 
      'eventValue': 'admin',
    });
}

function reportMouseLeaveButton1() {
  console.log('onMouseLeave_button_1')
  dataLayer.push(
    {
      'eventCategory': 'clicks', 
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
        <button type="submit">Button 2</button>
      </form>
      <button onMouseLeave={rendleMouseLeaveButton1}>Button 1</button>
      <a target="_blank" href="www.google.com">Google</a>
    </div>
  );
}

export default App;
