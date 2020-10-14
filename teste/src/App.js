import React from 'react';

var dataLayer = dataLayer || [];

function reportClickButton1() {
  console.log('click_button_1')
  dataLayer.push({'event': 'click_button_1', 'user': 'admin'});
}

function reportMouseLeaveButton1() {
  console.log('onMouseLeave_button_1')
  dataLayer.push({'event': 'onMouseLeave_button_1', 'user': 'professor'});
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
      <p>v3</p>
      <form id="signup-form" onSubmit={rendleClickButton1}>
        <button type="submit">Button 2</button>
      </form>
      <button onMouseLeave={rendleMouseLeaveButton1}>Button 1</button>
      <a target="_blank" href="www.google.com">Google</a>
    </div>
  );
}

export default App;
