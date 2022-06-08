import './App.css';
import CustomForm from './components/CustomForm';
import LifeCicle from './components/LifeCicle';
import State from './components/State';

function App() {
  return (
    <div className="App">
      <hr />
      <br />
      <LifeCicle />
      <br />
      <hr />
      <br />
      <State />
      <br />
      <hr />
      <br />
      <CustomForm />
    </div>
  );
}

export default App;
