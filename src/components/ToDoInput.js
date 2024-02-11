import '../styles/layout/ToDoInput.scss';

function ToDoInput({handleSearch, searchValue}) {
  const handleInput=(event)=>{
    handleSearch(event.target.value);
    console.log (event.target.value);
  }

  return (
    <div className="box">
      <input value = {searchValue}type="text" placeholder="Ir a fisioterapia" className="box__input" onChange={handleInput}></input>
    </div>
  )
}

export  {ToDoInput} ;
