import React, { useState } from "react";
import "../../styles/index.css";

const Home = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([
    "Hacer la cama",
    "Lavar manos",
    "Comer",
    "Sacar a pasear al perro",
  ]);

  const addTask = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      setTodos([...todos, task.trim()]);
      setTask("");
    }
  };

  const removeTask = (indexToRemove) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light">
      <h1 className="display-1 text-muted mb-4 shinoda-title">ShinodaTodolist</h1>
      <div className="card shadow-sm w-100" style={{ maxWidth: "600px" }}>
        <form onSubmit={addTask}>
          <input
            type="text"
            className="form-control border-0 border-bottom rounded-0"
            placeholder="¿Que necesitas hacer ?"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </form>
        <ul className="list-group list-group-flush">
          {todos.map((item, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {item}
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => removeTask(index)}
              >
                &times;
              </button>
            </li>
          ))}
          <li className="list-group-item text-muted small">
            {todos.length} item{todos.length !== 1 ? "s" : ""} left
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;