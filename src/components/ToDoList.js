import { ToDoItem } from "./ToDoItem";
import '../styles/layout/ToDoList.scss';



function ToDoList({ toDos, searchToDos, done, deleteToDos}) {
  return (
    <ul className="list">
     
        {searchToDos.map(toDo =>{
         return (
          <ToDoItem 
          key={toDo.text} 
          text={toDo.text}
          completed={toDo.completed}
          toDos={toDos}
          searchToDos={searchToDos}
          done={done}
          deleteToDos={deleteToDos}
          />
         )
        })
        }
      
    </ul>
  )
}

export { ToDoList } ;
