import { useEffect, useState } from "react";
import type { Task } from "../types";

type Prop = {
  task: Task;
  subjectName: string;
  setEditingTask: (task: Task) => void;
  setSelectedSubject: (subject: string) => void;
  deleteTask: (subject: string, task: Task) => void;
  updateProgress: (subject: string, task: Task, progress: string) => void;
};

type ProgressProp = {
  initialProg: string;
  task: Task;
  updateProgress: (subject: string, task: Task, priority: string) => void;
  subjectName: string;
};

export default function TableRow({
  task,
  subjectName,
  setEditingTask,
  setSelectedSubject,
  deleteTask,
  updateProgress,
}: Prop) {
  const [, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date()); // triggers re-render
    }, 60 * 1000); // check every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <tr>
        <td>{task.taskname}</td>
        <td
          style={{
            color: new Date(task.deadline) < new Date() ? "red" : "#dcdcdc",
          }}
        >
          {task.deadline ? new Date(task.deadline).toLocaleDateString() : ""}
        </td>
        <td
          style={{
            color:
              task.priority === "High"
                ? "red"
                : task.priority == "Medium"
                ? "orange"
                : "#dcdcdc",
          }}
        >
          {task.priority}
        </td>
        <td>
          <ProgressBtn
            initialProg={task.progress}
            task={task}
            subjectName={subjectName}
            updateProgress={updateProgress}
          />
        </td>
        <td>
          <button
            onClick={() => {
              setEditingTask(task);
              setSelectedSubject(subjectName);
            }}
          >
            Edit
          </button>
        </td>
        <td>
          <button
            onClick={() => {
              if (confirm(`Delete ${task.taskname}?`)) {
                // see if needed
                deleteTask(subjectName, task);
              }
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

function ProgressBtn({
  initialProg,
  task,
  subjectName,
  updateProgress,
}: ProgressProp) {
  const progStates = ["Not Started", "In-progress", "Completed"];
  const [progress, setProgress] = useState(initialProg);

  function handleClick() {
    const currIndex = progStates.findIndex((prog) => prog === progress);
    const nextProgress = progStates[(currIndex + 1) % 3];
    setProgress(nextProgress);

    updateProgress(subjectName, task, nextProgress);
  }

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor:
          progress === "Not Started"
            ? "red"
            : progress === "In-progress"
            ? "blue"
            : "green",
      }}
    >
      {progress}
    </button>
  );
}
