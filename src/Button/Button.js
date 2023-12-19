

const Button = (props) => {
    const {btnNum,btnFun,btnOp} = props;
    return (
        
       <div>
           {btnNum && <button onClick={()=> btnFun(btnNum)}>{btnNum}</button>}
           {btnOp && <button onClick={()=> btnFun(btnOp)}>{btnOp}</button>}
       </div>
        
    );
}

export default Button;