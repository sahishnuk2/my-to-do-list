import { useState } from "react";
import type { Task } from "../types";

type Prop = {
  task: Task;
};

type ProgressProp = {
  initialProg: string;
};

export default function TableRow({ task }: Prop) {
  return (
    <>
      <tr>
        <td>{task.taskname}</td>
        <td>{task.deadline}</td>
        <td>{task.priority}</td>
        <td>
          <ProgressBtn initialProg={task.progress} />
        </td>
        <td>
          <button>Edit</button>
        </td>
        <td>
          <button>Delete</button>
        </td>
      </tr>
    </>
  );
}

function ProgressBtn({ initialProg }: ProgressProp) {
  const progStates = ["Not Started", "In-progress", "Completed"];
  const [progress, setProgress] = useState(initialProg);

  return (
    <button
      onClick={() => {
        setProgress(
          progStates[
            (progStates.findIndex((prog) => prog === progress) + 1) % 3
          ]
        );
      }}
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
