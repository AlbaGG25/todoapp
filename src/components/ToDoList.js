import { ToDoItem } from "./ToDoItem";
import '../styles/layout/ToDoList.scss';



function ToDoList({defaultToDos}) {
  return (
    <ul className="list">
     
        {defaultToDos.map(toDo =>{
         return (
          <ToDoItem 
          key={toDo.text} 
          text={toDo.text}
          completed={toDo.completed}
          />
         )
        })
        }
      
    </ul>
  )
}

export { ToDoList } ;
