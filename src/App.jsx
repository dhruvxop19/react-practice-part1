import { useState } from "react"

function App (){
  return <div>
   
<b>
    Hey There 
</b>
  <Counter></Counter>
  </div>
}


function Counter(){
 const [count , setCount] = useState(0);

  function increaseCount (){
setCount (count + 1);
  }

function decreaseCount (){
  setCount(count - 1);
}

function resetCount (){
  setCount (0);
}

  return <div>
    <h1 id="text">{count}</h1>
  <button onClick={increaseCount}>Increase Count
  </button>
  <button onClick={decreaseCount}>Decrease Count</button>
  <button onClick={resetCount}>reset</button>
  </div>
}


 export default App 