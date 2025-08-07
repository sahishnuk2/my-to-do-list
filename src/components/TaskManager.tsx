import type { SubjectsMap, Task } from "../types";
import Table from "./Table";
import "./TaskManager.css";

type Prop = {
  allTasks: SubjectsMap;
  addSubject: () => void;
  addTask: (subject: string) => void;
  setEditingTask: (task: Task) => void;
  setSelectedSubject: (subject: string) => void;
  deleteTask: (subject: string, task: Task) => void;
};

export default function TaskManager({
  allTasks,
  addSubject,
  addTask,
  setEditingTask,
  setSelectedSubject,
  deleteTask,
}: Prop) {
  function handleAddTask(subject: string) {
    addTask(subject);
  }
  // function handleEditTask(subject: string) {
  //   editTask(task);
  // }

  return (
    <>
      <div className="tasks">
        <h2>Tasks</h2>
        <div className="btns">
          <button onClick={addSubject}>Add new subject</button>
          <button>Delete Subject</button>
        </div>
      </div>
      {Object.entries(allTasks).map(([subject, taskMap]) => {
        return (
          <Table
            key={subject}
            subjectName={subject}
            tasks={taskMap}
            addTask={handleAddTask}
            setEditingTask={setEditingTask}
            setSelectedSubject={setSelectedSubject}
            deleteTask={deleteTask}
          />
        );
      })}
    </>
  );
}

// Add setEditTask and setSelectedSubject to table -> all the way to tablerow.
