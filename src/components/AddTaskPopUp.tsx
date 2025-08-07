import { useState } from "react";
import "./AddTaskPopUp.css";
import type { Task } from "../types";

type Prop = {
  onClose: () => void;
  onSubmit: (task: Task) => void;
};

export default function AddTaskPopUp({ onClose, onSubmit }: Prop) {
  const [taskName, setTaskName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("Low");

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    if (!taskName.trim()) return;

    onSubmit({
      id: crypto.randomUUID(),
      taskname: taskName.trim(),
      deadline,
      priority,
      progress: "Not Started",
    });
    onClose();
  }

  return (
    <>
      <div className="adding-task">
        <div className="adding-contents">
          <form id="task-adder" onSubmit={handleSubmit}>
            <div className="taskname task-details">
              <p>Task Name:</p>
              <input
                type="text"
                onChange={(e) => setTaskName(e.target.value)}
              ></input>
            </div>
            <div className="deadline task-details">
              <p>Deadline:</p>
              <input
                type="date"
                onChange={(e) => setDeadline(e.target.value)}
              ></input>
            </div>
            <div className="priority task-details">
              <p>Priority:</p>
              <select onChange={(e) => setPriority(e.target.value)}>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div className="btns">
              <button type="submit">Add Task</button>
              <button onClick={onClose}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
