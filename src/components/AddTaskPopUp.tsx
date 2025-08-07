import { useEffect, useState } from "react";
import "./AddTaskPopUp.css";
import type { Task } from "../types";

type Prop = {
  onClose: () => void;
  onSubmit: (task: Task) => void;
  task?: Task | null;
};

export default function AddTaskPopUp({ onClose, onSubmit, task }: Prop) {
  const [taskName, setTaskName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("Low");

  useEffect(() => {
    if (task) {
      setTaskName(task.taskname);
      setDeadline(task.deadline);
      setPriority(task.priority);
    }
  }, [task]);

  function handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
    if (!taskName.trim()) return;

    const updatedTask: Task = {
      id: task?.id ?? crypto.randomUUID(),
      taskname: taskName.trim(),
      deadline,
      priority,
      progress: task?.progress ?? "Not Started",
    };

    onSubmit(updatedTask);
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
                value={taskName}
                type="text"
                onChange={(e) => setTaskName(e.target.value)}
              ></input>
            </div>
            <div className="deadline task-details">
              <p>Deadline:</p>
              <input
                value={deadline}
                type="date"
                onChange={(e) => setDeadline(e.target.value)}
              ></input>
            </div>
            <div className="priority task-details">
              <p>Priority:</p>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div className="btns">
              <button type="submit">
                {task ? "Save Changes" : "Add Task"}
              </button>
              <button onClick={onClose}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
