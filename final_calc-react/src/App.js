import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class = "container">
          <h3>Current grade</h3>
          <input id = "current"></input>
          <h3>Desired grade</h3>
          <input id = "desired"></input>
          <h3>Final worth</h3>
          <input id = "worth"></input>
          
        </div>

<div class = "buttons">
  <div class = "sub">
    <button onclick = {calculate} class = "subBtn">Submit</button>
      <button class = "clearBtn">Clear</button>
  </div>
      
       
</div>
     

      </header>
    </div>
  );
}

let current = document.getElementById("current");


function calculate() {
  alert(current);
}

function clear() {

}

export default App;
