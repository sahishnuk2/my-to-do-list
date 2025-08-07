import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import TaskManager from "./components/TaskManager";
import AddTaskPopUp from "./components/AddTaskPopUp";
import AddSubjectPopUp from "./components/AddSubjectPopUp";
import type { SubjectsMap, Task } from "./types";

const initialState: SubjectsMap = {};

function App() {
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [isAddingSubject, setIsAddingSubject] = useState(false);
  const [state, setState] = useState<SubjectsMap>(initialState);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  let pendingCount = 0;
  for (const subjectName in state) {
    const taskMap = state[subjectName];
    for (const taskId in taskMap) {
      const task = taskMap[taskId];
      if (task.progress !== "Completed") {
        pendingCount++;
      }
    }
  }

  function addSubject(subjectName: string) {
    setState((prev) => {
      if (!subjectName) {
        alert("Please enter a subject");
        return prev;
      }

      if (prev[subjectName]) {
        alert("Subject already added!");
        return prev;
      }
      setIsAddingSubject(false);
      console.log(state);
      return {
        ...prev,
        [subjectName]: {},
      };
    });
  }

  function addTask(selectedSubject: string, task: Task): void {
    setState((prev) => {
      const taskMap = prev[selectedSubject];
      return {
        ...prev,
        [selectedSubject]: {
          ...taskMap,
          [task.id]: task,
        },
      };
    });
  }

  return (
    <>
      <Header count={pendingCount}></Header>
      <TaskManager
        allTasks={state}
        setAllTasks={setState}
        addSubject={() => setIsAddingSubject(true)}
        addTask={(subjectName: string) => {
          setSelectedSubject(subjectName);
          setIsAddingTask(true);
        }}
      />
      {isAddingTask && (
        <AddTaskPopUp
          onClose={() => setIsAddingTask(false)}
          onSubmit={(task) => {
            if (selectedSubject !== null) {
              addTask(selectedSubject, task);
            }
          }}
        />
      )}
      {isAddingSubject && (
        <AddSubjectPopUp
          onClose={() => setIsAddingSubject(false)}
          onSubmit={(subjectName) => addSubject(subjectName)}
        />
      )}
    </>
  );
}

export default App;
