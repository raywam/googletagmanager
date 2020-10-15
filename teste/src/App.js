import React from 'react';

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


function App() {
  function rendleSubmit(event) {
    event.preventDefault()
    reportSubmit()
  }



  return (
    <div className="App" style={{minHeight:1800 + 'px'}}>
      <p>v4</p>
      <form id="signup-form" onSubmit={rendleSubmit}>
        <input type="text"></input>
        <button type="submit">Submit</button>
      </form>
      <br/>
      <a target="_blank" rel="noopener noreferrer" href="https://www.google.com">Google</a>
    </div>
  );
}

export default App;
