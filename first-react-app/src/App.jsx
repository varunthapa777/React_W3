import MyButton from "./components/MyButton"

function App() {

  const onHandleClick = () => {  
     alert(`Button clicked`)
  }

  return (
    <>
    <div id="main">
      <h1>Hello, world!</h1>
      <MyButton color="red" handleClick = {onHandleClick} />
      <MyButton color="green" handleClick = {onHandleClick} />
      <MyButton color="blue" handleClick  = {onHandleClick} />
    </div>
    </>
  )
}

export default App
