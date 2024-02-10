import {ToDoInput} from './ToDoInput.js';
import {ToDoChecks} from './ToDoChecks.js';
import {ToDoList} from './ToDoList.js';
import {ButtonNewToDo } from './ButtonNewToDo.js';
import '../styles/layout/App.scss';

const defaultToDos=[
  {text: 'Ir a la compra', completed: false},
  {text: 'Ir a fisioterapia', completed: true},
  {text: 'Comprar libros', completed: false},
  {text: 'Comer fuera', completed: true},
]

function App() {
  return (
    <div className="App main">
      <header className="App-header">
        <h1>
          Create your own ToDo's List
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
