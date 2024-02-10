import '../styles/layout/ToDoItem.scss';

function ToDoItem({text, completed}) {

  return (
    <li className="element" >
      <span className="element__check">V</span>
      <p className="element__text">{text}</p>
      <span className="element__x">X</span>
    </li>
  )
}

export { ToDoItem } ;
