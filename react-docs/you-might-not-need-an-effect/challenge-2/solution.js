import { useState, useMemo } from 'react';
import { initialTodos, createTodo, getVisibleTodos } from './todos.js';

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);
  const [newTodo, setNewTodo] = useState('');

  const visibleTodos = useMemo(
    () => getVisibleTodos(todos, showActive),
    [todos, showActive],
  );

  function handleAddTodo() {
    if (newTodo.trim() !== '') {
      setTodos([...todos, createTodo(newTodo)]);
      setNewTodo('');
    }
  }

  return (
    <>
      <label>
        <input
          type='checkbox'
          checked={showActive}
          onChange={(e) => setShowActive(e.target.checked)}
        />
        Show only active todos
      </label>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder='Add a todo'
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {visibleTodos.map((todo) => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
    </>
  );
}
