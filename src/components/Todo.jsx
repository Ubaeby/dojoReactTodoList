import { useState } from "react";

const Todo = props => {

    const { todoList, setTodoList} = props;
    const [ newForm, setNewForm ] = useState("");

    const completeTodo = {
        text: newForm,
        complete: false,
        id: Math.floor(Math.random() * 100).toString()
    }

    const handleSubmit = e => {
        e.preventDefault();
        setTodoList([...todoList, completeTodo]);
        setNewForm("");
    }

    const widthStyle = {
        width: "250px"
    }

    return (
        <>
        <h1> You're here to create a todo list</h1>
        <form onSubmit={ handleSubmit }>
            <input type="text" value={ newForm } placeholder="Ferb, I know what we're going to do today!" onChange={ (e) => setNewForm(e.target.value) } style = { widthStyle } />
            <button> Add </button>
        </form>
        </>

    )
}

export default Todo; 