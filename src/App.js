import { useState } from 'react';
import './App.css';
import Button from './Button/Button';

function App() {

  const [val2, setVal2] = useState('');
  const [temp, setTemp] = useState(0)

  const btnArr1 = [1,2,3];
  const btnArr2 = [4,5,6];
  const btnArr3 = [7,8,9];
  const btnArr4 = ['C', '0' , '=']

  const btnOp = ['+', '-','*','/'];

  const printValue = (value) => {
    setVal2(val2 + value)

    if(value === 'C'){
      setVal2('');
      setTemp(0)
    }

    if(value === '+'){
      setVal2('');
      setTemp(parseInt(val2) + temp)
    }
    if(value === '='){
      setTemp(temp + val2);
      setVal2('');
      setVal2(parseInt(temp) + parseInt(val2));
    }
    // if(value === '-'){
    //   setVal2('');
    //   setTemp(val2 + '-');
    // }
    // if(value === '/'){
    //   setVal2('');
    //   setTemp(val2 + '/');
    // }
    // if(value === '*'){
    //   setVal2('');
    //   setTemp(val2 + '*');
    // }
    
  }

  const intBtn1 = btnArr1.map((btnNum) => <Button btnNum = {btnNum} btnFun={printValue}/>)
  const intBtn2 = btnArr2.map((btnNum) => <Button btnNum = {btnNum} btnFun={printValue}/>)
  const intBtn3 = btnArr3.map((btnNum) => <Button btnNum = {btnNum} btnFun={printValue}/>)
  const intBtn4 = btnArr4.map((btnNum) => <Button btnNum = {btnNum} btnFun={printValue}/>)

  const opBtn = btnOp.map((op) => <Button btnOp = {op} btnFun={printValue} />)

  return (
    <div className="App">
      
      <div>

        <span>this : {temp}</span><br /><br />
        <input type="text" value={val2}  onChange={(e) => setVal2(e.target.value)}/>

      </div>

      <div>

        <div id='intBtn'>

          <span className='span' >{intBtn1}</span> 
          <span className='span' >{intBtn2}</span> 
          <span className='span' >{intBtn3}</span>
          <span className='span' >{intBtn4}</span>

        </div>

        <div id='opBtnDiv'>

          <span id='opBtn'> {opBtn}</span>

        </div>

      </div>
      
    </div>
  );
}

export default App;
