import React from 'react';

window.dataLayer = window.dataLayer || [];

function reportClickButton1() {
  console.log('click_button_1')
  window.dataLayer.push({'event': 'click_button_1'});
}

function reportMouseUpButton1() {
  console.log('onMouseUp_button_2')
  window.dataLayer.push({'event': 'onMouseUp_button_2'});
}

function App() {
  function rendleClickButton1(event) {
    event.preventDefault();
    reportClickButton1();
  }

  function rendleMouseUpButton2(event) {
    event.preventDefault();
    reportMouseUpButton1();
  }


  return (
    <div className="App">
      <form id="signup-form" onSubmit={rendleClickButton1}>
        <button type="submit">Button 1</button>
      </form>
      <button onMouseUp={rendleMouseUpButton2}>Button 1</button>
    </div>
  );
}

export default App;
