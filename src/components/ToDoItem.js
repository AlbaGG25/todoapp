import '../styles/layout/ToDoItem.scss';

function ToDoItem({text, completed,  toDos, done, deleteToDos}) {
  

  return (
    <li className="element" >
      <span className={`element__check ${completed && 'checkedOn'}`}  onClick={()=>done(text)} 
      >V</span>
      <p className={`element__text ${completed && 'checkedOn'}`}>{text}</p>
      <span className={`element__x`}  onClick={()=> deleteToDos(text)} >X</span>
    </li>
  )
}

export { ToDoItem } ;
