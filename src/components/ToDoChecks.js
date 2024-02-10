import '../styles/ToDoChecks.scss';

function ToDoChecks({completed, total}) {
  return (
    <span>
       <h2 className="checkTitle">Has completado {completed} de {total} tareas!</h2>
    </span>
  )
}

export  {ToDoChecks} ;
