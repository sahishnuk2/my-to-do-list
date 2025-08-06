import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Table from "./components/Table";
import TaskManager from "./components/TaskManager";

function App() {
  const isAddingTask = true;

  return (
    <>
      <Header></Header>
      <TaskManager />
      {isAddingTask && (
        <div className="adding-task">
          <div className="adding-contents">
            <div className="taskname task-details">
              <p>Task Name:</p>
              <input type="text"></input>
            </div>
            <div className="deadline task-details">
              <p>Deadline:</p>
              <input type="date"></input>
            </div>
            <div className="priority task-details">
              <p>Priority:</p>
              <select>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div className="btns">
              <button>Add Task</button>
              <button>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
