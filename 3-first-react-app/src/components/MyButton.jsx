const MyButton = ({color, handleClick}) => {

    return ( <button style={{background: color, fontSize: '20px', borderRadius: 4, display: "block", margin: 5}} onClick={handleClick} >Click Me</button> );
}

export default MyButton;