import TableRow from "./TableRow";
import "./Table.css";
import type { TasksMap } from "../types";

type Prop = {
  subjectName: string;
  tasks: TasksMap;
  addTask: (subject: string) => void;
};

export default function Table({ subjectName, tasks, addTask }: Prop) {
  return (
    <>
      <div className="subject">
        <table>
          <thead>
            <tr>
              <th colSpan={6}>{subjectName}</th>
            </tr>
            <tr>
              <th>Name</th>
              <th>Deadline</th>
              <th>Priority</th>
              <th>Progress</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(tasks).map((task) => (
              <TableRow key={task.id} task={task} />
            ))}
          </tbody>
        </table>
        <button className="add" onClick={() => addTask(subjectName)}>
          Add Task
        </button>
      </div>
    </>
  );
}
