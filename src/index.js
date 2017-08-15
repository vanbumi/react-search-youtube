import React from 'react';
import ReactDOM from 'react-dom';

// create new component. This component should produce 
// some HTML

const App = () => {
  return <div>Hello! ganti with fat arrow</div>
};

// take this component's generated HTML and put it
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));


