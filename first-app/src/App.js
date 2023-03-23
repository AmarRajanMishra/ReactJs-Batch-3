
import './App.css';
import CompB from './components/CompB';
import First from './First'
import { CompA as A, CompC, CompD } from './First'

function App() {
  return (
    <div className="App">
     <h1>Welcome React Js Class</h1>
     <First />
      <CompB />
      <A />
      <CompC />
      <CompD />
    </div>
  );
}

export default App;
