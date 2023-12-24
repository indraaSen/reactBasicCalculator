

const Button = (props) => {

    return (
        
       <div>
           {props.btnNum && <button onClick={()=> props.btnFun(props.btnNum)}>{props.btnNum}</button>}
           {props.btnOp && <button onClick={()=> props.btnFun(props.btnOp)}>{props.btnOp}</button>}
       </div>
        
    );
}

export default Button;