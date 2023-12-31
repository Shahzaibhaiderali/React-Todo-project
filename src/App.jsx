import { useState } from 'react';
import './App.css';
import { FaEdit, FaTrashAlt, FaPlus } from 'react-icons/fa';

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo(event) {
    event.preventDefault();
    setTodos([...todos, text]);
    setText("");
  }

  function deleteTodo(index) {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  }

  function editTodo(index) {
    const editedText = prompt('Edit Todo:', todos[index]);
    if (editedText !== null) {
      const updatedTodos = [...todos];
      updatedTodos[index] = editedText;
      setTodos(updatedTodos);
    }
  }

  return (
    <>
      <h2>TODO APP</h2>
      <form onSubmit={addTodo}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder=' Enter Your Todo' />
        <button type="submit"><FaPlus/></button>
      </form>
      <ol>
        {todos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteTodo(index)}>Delete <FaTrashAlt/></button>
            <button onClick={() => editTodo(index)}>Edit <FaEdit /></button>
          </li>
        ))}
      </ol>
    </>
  )
}

export default App;
