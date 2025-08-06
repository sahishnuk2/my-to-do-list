import { useState } from "react";

// type Prop = {
//   task: any;
// };

export default function TableRow() {
  return (
    <>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <ProgressBtn />
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

function ProgressBtn() {
  const progStates = ["Not Started", "In-progress", "Completed"];
  const [progress, setProgress] = useState(progStates[0]);

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
