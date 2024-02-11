import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";
import '../styles/layout/ToDoItem.scss';

function ToDoItem({text, completed,  toDos, done, deleteToDos}) {
  

  return (
    <li className="element" >
      <CompleteIcon completed={completed} onClick={()=>done(text)}/>
      
      <p className={`element__text ${completed && 'checkedOn'}`}>{text}</p>
      {/* <span className={`element__x`}  >X</span> */}
      <DeleteIcon  onClick={()=> deleteToDos(text)}/>
    </li>
  )
}

export { ToDoItem } ;
