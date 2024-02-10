import {ToDoInput} from './ToDoInput.js';
import {ToDoChecks} from './ToDoChecks.js';
import {ToDoList} from './ToDoList.js';
import {ToDoItem} from './ToDoItem.js';
import {ButtonNewToDo } from './ButtonNewToDo.js';
import '../styles/App.scss';

const defaultToDos=[
  {text: 'Ir a la compra', completed: false},
  {text: 'Ir a fisioterapia', completed: true},
  {text: 'Comprar libros', completed: false},
  {text: 'Comer fuera', completed: true},
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          ToDo's App
        </h1>
      </header>

      <ToDoInput />

      <ToDoChecks completed={16} total={30}/>

      <ToDoList defaultToDos={defaultToDos} >
        
      </ToDoList>

      <ButtonNewToDo />
    </div>

  );
}

export default App;
