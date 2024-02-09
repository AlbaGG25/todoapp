import {ToDoInput} from './ToDoInput.js';
import {ToDoChecks} from './ToDoChecks.js';
import {ToDoList} from './ToDoList.js';
import {ToDoItem} from './ToDoItem.js';
import {ButtonNewToDo } from './ButtonNewToDo.js';
import '../App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          ToDo's App
        </h1>
      </header>

      <ToDoInput />

      <ToDoChecks />

      <ToDoList>
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
      </ToDoList>

      <ButtonNewToDo />
    </div>

  );
}

export default App;
