import { useState, useEffect } from "react"
// conditonal rendering 
function App() {
  let [counterVisible, setCounterVisible ] = useState (true);

  useEffect (function(){
    setInterval (function(){
      setCounterVisible (c => !c)
    }, 5000);
  } ,[])


  return <div>
   {counterVisible ?  <Counter></Counter> : null }
   {counterVisible && <Counter></Counter>}
   hello there 
   
  </div>
}

// mounting , re rendering , unmounting 
function Counter() {
  const [count, setCount] = useState(0);
  // hooking into lifecycle events of react
  console.log("counter")

  //  setInterval (function(){
  //   setCount ( count + 1);
  //  }, 1000)

  // guard our set intervals from re renders 
  useEffect(function () {
    setInterval(function () {
      setCount(count => count + 1);
    }, 1000)
    console.log("mounted");
  }, []);

  function increaseCount() {
    setCount(count + 1);
  }

  return <div>
    <h1 id="text">{count}</h1>
    <button onClick={increaseCount}>increasecount</button>
  </div>

}


export default App 