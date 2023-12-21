import { useState } from 'react';
import './App.css';
import Button from './Button/Button';

function App() {

  const [newValue, setNewValue] = useState(0);
  const [prevValue, setPrevValue] = useState("0");
  const [currentOp,setCurrentOp] = useState('+');
  //const [allOperation, setAllOperation] = useState('0');

  const btnArr1 = ['1','2','3'];
  const btnArr2 = ['4','5','6'];
  const btnArr3 = ['7','8','9'];
  const btnArr4 = ['C'];
  const btnArr5 = ['0'];
  const btnArr6 = ['='];

  const opBtn1 = ['+'];
  const opBtn2 = ['-'];
  const opBtn3 = ['*'];
  const opBtn4 = ['/'];

  const printValue = (value) => {

    //setAllOperation(newValue + value)
    
    if (newValue != '0') {
      setNewValue(newValue + value)
    }else{
      setNewValue(value);
    }
  }

  const opClick = (op) =>{

    if (op == '=') {
      console.log("prevValue",prevValue);
      console.log("newValue",newValue);

      switch (currentOp) {
        case '+':
          setNewValue(parseInt(prevValue)+parseInt(newValue))
          break;
        case '-':
          setNewValue(parseInt(prevValue)-parseInt(newValue))
          break;
        case '/':
          setNewValue(parseInt(prevValue)/parseInt(newValue))
          break;
        case '*':
          setNewValue(parseInt(prevValue)*parseInt(newValue))
          break;
        default:
          break;
      } 
      return;
    }

    setPrevValue(newValue);
    setNewValue(0);
    setCurrentOp(op);
    console.log("op",op);

    if (op == 'C') {
      setNewValue(0);
      setPrevValue('0');
      setCurrentOp('+');
      // setAllOperation('0')
    }
  }

  const intBtn1 = btnArr1.map((btnNum) => <Button btnNum = {btnNum} btnFun={printValue}/>)
  const intBtn2 = btnArr2.map((btnNum) => <Button btnNum = {btnNum} btnFun={printValue}/>)
  const intBtn3 = btnArr3.map((btnNum) => <Button btnNum = {btnNum} btnFun={printValue}/>)
  const intBtn4 = btnArr4.map((btnNum) => <Button btnNum = {btnNum} btnFun={opClick}/>)
  const intBtn5 = btnArr5.map((btnNum) => <Button btnNum = {btnNum} btnFun={printValue}/>)
  const intBtn6 = btnArr6.map((btnNum) => <Button btnNum = {btnNum} btnFun={opClick}/>)

  const btnOp1 = opBtn1.map((op) => <Button btnOp = {op} btnFun={opClick} />)
  const btnOp2 = opBtn2.map((op) => <Button btnOp = {op} btnFun={opClick} />)
  const btnOp3 = opBtn3.map((op) => <Button btnOp = {op} btnFun={opClick} />)
  const btnOp4 = opBtn4.map((op) => <Button btnOp = {op} btnFun={opClick} />)

  return (
    <div className="App">

      <div className='AppChild'>
      
        <div>

          <input id="show" type="text" value={prevValue}/><br /> 
          <input id="textInput" type="text" value={newValue}  onChange={(e) => setNewValue(e.target.value)}/>

        </div>

        <div>

          <div id='intBtn'>

            <span className='span' >{intBtn1}</span> 
            <span className='span' >{intBtn2}</span> 
            <span className='span' >{intBtn3}</span>
            <span className='span' id='AlpC'>{intBtn4}</span>
            <span className='span' id='numO' >{intBtn5}</span>
            <span className='span' id="OpEquals">{intBtn6}</span>

          </div>

          <div id='opBtnDiv'>
            <span id='opBtn4'> {btnOp4}</span>
            <span id='opBtn3'> {btnOp3}</span>
            <span id='opBtn2'> {btnOp2}</span>
            <span id='opBtn1'> {btnOp1}</span>

          </div>

        </div>

      </div>
      
    </div>
  );
}

export default App;
