import React from 'react';
import {useState} from 'react';

import {ToDoInput} from './ToDoInput.js';
import {ToDoChecks} from './ToDoChecks.js';
import {ToDoList} from './ToDoList.js';
import {ButtonNewToDo } from './ButtonNewToDo.js';
import '../styles/layout/App.scss';

const defaultToDos=[
  {text: 'Ir a la compra', completed: false},
  {text: 'Ir a fisioterapia', completed: false},
  {text: 'Comprar libros', completed: false},
  {text: 'Comer fuera', completed: true},
  {text: 'Terminar curso', completed: true},
];


function App() {
const [searchValue, setSearchValue] = useState('');
const [toDos, setToDos] = useState (defaultToDos); 


const handleSearch =(value)=>{
  setSearchValue(value)
}; 


const completedToDos = toDos.filter (toDo => toDo.completed).length; 

const totalToDos = toDos.length;

const searchToDos = toDos.filter ((toDo) => (
  toDo.text.toLowerCase().includes(searchValue.toLowerCase())
)
  );

const doneToDos = (text)=>{
  const newToDos = [...toDos]; 
  const todoIndex = newToDos.findIndex(
    (todo)=> todo.text === text
  );
  newToDos[todoIndex].completed = true; 
  setToDos(newToDos);
}

const deleteToDos = (text)=>{
  const newToDos = [...toDos]; 
  const todoIndex = newToDos.findIndex(
    (todo)=> todo.text === text
  );
  newToDos.splice(todoIndex, 1); 
  setToDos(newToDos);
};

  return (
    <div className="App main">
      <header className="App-header">
        <h1>
          Create your own ToDo's List
        </h1>
      </header>

      <ToDoInput searchValue={searchValue} handleSearch={handleSearch}/>

      <ToDoChecks completed={completedToDos} total={totalToDos}/>

      <ToDoList toDos={toDos} done={doneToDos} deleteToDos={deleteToDos} searchToDos={searchToDos} >
        
      </ToDoList>

      <ButtonNewToDo />
    </div>

  );
}

export default App;
