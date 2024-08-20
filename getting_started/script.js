function Button(){
return <button>Click me</button>
}

function Hello() {
    return (
        <div>
            <h1>Hello World!</h1>
            <Button />
        </div>
    ) 
  }

  const container = document.getElementById('mydiv');
  const root = ReactDOM.createRoot(container);
  root.render(<Hello />)