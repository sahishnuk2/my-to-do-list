import type { SubjectsMap } from "../types";
import Table from "./Table";
import "./TaskManager.css";

type Prop = {
  allTasks: SubjectsMap;
  setAllTasks: React.Dispatch<React.SetStateAction<SubjectsMap>>;
  addSubject: () => void;
  addTask: (subject: string) => void;
};

export default function TaskManager({
  allTasks,
  setAllTasks,
  addSubject,
  addTask,
}: Prop) {
  function handleAddTask(subject: string) {
    addTask(subject);
  }

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
          />
        );
      })}
    </>
  );
}
