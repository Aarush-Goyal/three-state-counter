import React,{useState} from 'react';
import './App.css';

// TODO: Most Important
// Never Update any variable from the state directly

function App(){
const [count, setCount] = useState(0)
return(

    <div className="App">
      <header>
      <h1>State Counter App</h1>
      </header>
      <h2>Count = {count}</h2>
      <button onClick={()=>{setCount(0)}}>Reset</button>
      <div>
        <button onClick={()=>(count >= 10 ? "":setCount(count + 1))}>Increase</button>
        <button onClick={()=>(count === 0 ? "":setCount(count -1))}>Reduce</button>
      </div>
      <div>
        <h3>Some Info About the App</h3>
        <p>The app uses the concept of state to Increase and Decrease the Value of count</p>
      </div>
      <p><b>Note:</b> The app only counts till 10</p>
    </div>
  );
}
export default App;
