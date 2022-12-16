import './App.css';
import Todo from './components/Todo';
import TodoResults from './components/TodoResults';
import { useState } from 'react';

function App() {

  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <Todo 
      todoList = { todoList }
      setTodoList = {setTodoList} />

      <TodoResults todoList = { todoList } setTodoList = {setTodoList}/>
    </div>
  );
}

export default App;
