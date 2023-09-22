import React from 'react'
import Item from './containers/Item/Item'
import Comments from './containers/Comments/Comments';
import './App.css'
function App() {
  return (
    <div className="App">
    <div className="column">
      <Item/>
    </div>
    <div className="column">
      <Comments/>
    </div>
    </div>
  );
}

export default App;
