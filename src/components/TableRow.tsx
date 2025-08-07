import { useState } from "react";
import type { Task } from "../types";

type Prop = {
  task: Task;
  subjectName: string;
  setEditingTask: (task: Task) => void;
  setSelectedSubject: (subject: string) => void;
};

type ProgressProp = {
  initialProg: string;
  task: Task;
};

export default function TableRow({
  task,
  subjectName,
  setEditingTask,
  setSelectedSubject,
}: Prop) {
  return (
    <>
      <tr>
        <td>{task.taskname}</td>
        <td>{task.deadline}</td>
        <td>{task.priority}</td>
        <td>
          <ProgressBtn initialProg={task.progress} task={task} />
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
          <button>Delete</button>
        </td>
      </tr>
    </>
  );
}

function ProgressBtn({ initialProg, task }: ProgressProp) {
  const progStates = ["Not Started", "In-progress", "Completed"];
  const [progress, setProgress] = useState(initialProg);

  function handleClick() {
    const currIndex = progStates.findIndex((prog) => prog === progress);
    const nextProgress = progStates[(currIndex + 1) % 3];
    setProgress(nextProgress);
    task.progress = nextProgress;
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
