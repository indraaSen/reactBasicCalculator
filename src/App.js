import { useState } from 'react';
import './App.css';

function App() {

  const [val1, setVal1] = useState(1);
  const [val2, setVal2] = useState(1);


  const [op, setOp] = useState(0);

  const addValue = () => {
    setOp(parseInt(val1) + parseInt(val2));
  }
  const subValue = () => {
    setOp(parseInt(val1) - parseInt(val2));
  }
  const divValue = () => {
    if(val2 !== "0")
      setOp(parseInt(val1) / parseInt(val2));
    else
      setOp("can't divided by zero");
  }
  const mulValue = () => {
    setOp(parseInt(val1) * parseInt(val2));
  }


  return (
    <div className="App">
      
      <div>
        <input type="number" value={val1} onChange={(e) => setVal1(e.target.value)} /> <br />
        <input type="number" value={val2} onChange={(e) => setVal2(e.target.value)} />
      </div>
      <div>
        <span>The result is = {op}</span> <br />
        <button onClick={addValue}>add</button>
        <button onClick={subValue}>sub</button><br />
        <button onClick={divValue}>div</button>
        <button onClick={mulValue}>mul</button>
      </div>
      
    </div>
  );
}

export default App;
