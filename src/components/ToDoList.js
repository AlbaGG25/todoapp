import { ToDoItem } from "./ToDoItem";


function ToDoList({defaultToDos}) {
  return (
    <ul>
     
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
