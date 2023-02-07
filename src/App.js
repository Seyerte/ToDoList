import './App.css';
import { ItemForm } from './components/ItemForm/ItemForm';
import { Navbar } from './components/Navbar/Navbar';
import { Todolist } from './components/Todolist/Todolist';

function App() {
  return (
    <>
      <Navbar/>
      <ItemForm/>
      <Todolist/>
    </>
    
  );
}

export default App;

