import TableRow from "./TableRow";
import "./Table.css";
import type { Task, TasksMap } from "../types";

type Prop = {
  subjectName: string;
  tasks: TasksMap;
  addTask: (subject: string) => void;
  setEditingTask: (task: Task) => void;
  setSelectedSubject: (subject: string) => void;
  deleteTask: (subject: string, task: Task) => void;
  deleteSubject: (subject: string) => void;
  updateProgress: (subject: string, task: Task, progress: string) => void;
};

export default function Table({
  subjectName,
  tasks,
  addTask,
  setEditingTask,
  setSelectedSubject,
  deleteTask,
  deleteSubject,
  updateProgress,
}: Prop) {
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
              <TableRow
                key={task.id}
                task={task}
                subjectName={subjectName}
                setEditingTask={setEditingTask}
                setSelectedSubject={setSelectedSubject}
                deleteTask={deleteTask}
                updateProgress={updateProgress}
              />
            ))}
          </tbody>
        </table>
        <div className="button-table">
          <button className="add" onClick={() => addTask(subjectName)}>
            Add Task
          </button>
          <button
            className="add"
            onClick={() => {
              if (confirm(`Delete all tasks for subject "${subjectName}"?`)) {
                deleteSubject(subjectName);
              }
            }}
          >
            Delete Subject
          </button>
        </div>
      </div>
    </>
  );
}
