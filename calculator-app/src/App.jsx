import "./App.css";
import Button from "./components/Button";
import {useState} from 'react'
import InputScreenWithCopyIcon from "./components/InputScreenWithCopyIcon";

function App() {

  const [inputValue, changeInputValue] = useState("")
  const [isEvaluated, changeIsEvaluated] = useState(false)

  const handleOnClick = (event) => {
    const buttonText = event.target.innerText;
  
    if (buttonText === '=') {
      // Calculate the result
      try {
        const result = eval(inputValue); // Use eval with caution; it's better to use a math library
        changeInputValue(result.toString());
        changeIsEvaluated(true)
      } catch (error) {
        changeInputValue('Error');
        console.log(error);
        
      }
    } else if (buttonText === 'AC') {
      // Clear all input (reset the calculator)
      changeInputValue('');
    } else if (buttonText === 'C') {
      // Clear the last character
      const newInputValue = inputValue.slice(0, -1);
      changeInputValue(newInputValue);
    } else {
      // Handle regular button input
      if(isEvaluated){changeIsEvaluated(false)}
      const newInputValue = inputValue + buttonText;
      changeInputValue(newInputValue);
    }
  };
  
  const handleCopyButton = ()=>{
    navigator.clipboard.writeText(inputValue)

  }
  // list buttons required in caluclator
  const buttons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "C",
    "+",
    "*",
    "AC",
    ".",
    "/",
    "=",
  ];

  return (
    <>
      <div className="container">
        <div className="frame">
          {/* <InputScreen value={inputValue} /> */}
          <InputScreenWithCopyIcon value={inputValue} onClick={handleCopyButton} iconVisible={isEvaluated} />
   
          <div className="keys">
          {
            buttons.map((button)=>(
              <Button key={button} value={button} onClick={handleOnClick}/>
            ))
          }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
