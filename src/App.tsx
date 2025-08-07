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
  const [editingTask, setEditingTask] = useState<Task | null>(null);

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

  function updateTask(subject: string, updatedTask: Task): void {
    setState((prev) => ({
      ...prev,
      [subject]: {
        ...prev[subject],
        [updatedTask.id]: updatedTask,
      },
    }));
    // const stateClone = structuredClone(state);
    // const taskMap = stateClone[subject];
    // taskMap[updatedTask.id] = updatedTask;
    // setState(stateClone);
  }

  function deleteTask(subject: string, task: Task): void {
    setState((prev) => {
      const taskMap = { ...prev[subject] };
      delete taskMap[task.id];
      return {
        ...prev,
        [subject]: taskMap,
      };
    });

    setEditingTask(null);
    setSelectedSubject(null);
    setIsAddingTask(false);
  }

  function deleteSubject(subject: string) {
    setState((prev) => {
      const newState = { ...prev };
      delete newState[subject];
      return newState;
    });

    // Optional cleanup
    setEditingTask(null);
    setSelectedSubject(null);
    setIsAddingTask(false);
  }

  function updateProgress(subject: string, task: Task, progress: string) {
    setState((prev) => {
      const subjectTasks = { ...prev[subject] };
      const taskToUpdate = { ...subjectTasks[task.id], progress };
      subjectTasks[task.id] = taskToUpdate;
      return {
        ...prev,
        [subject]: subjectTasks,
      };
    });
  }

  return (
    <>
      <Header count={pendingCount}></Header>
      <TaskManager
        allTasks={state}
        addSubject={() => setIsAddingSubject(true)}
        addTask={(subjectName: string) => {
          setSelectedSubject(subjectName);
          setIsAddingTask(true);
        }}
        setEditingTask={setEditingTask}
        setSelectedSubject={setSelectedSubject}
        deleteTask={deleteTask}
        deleteSubject={deleteSubject}
        updateProgress={updateProgress}
      />
      {(isAddingTask || editingTask) && (
        <AddTaskPopUp
          task={editingTask}
          onClose={() => {
            setIsAddingTask(false);
            setEditingTask(null);
            setSelectedSubject(null);
          }}
          onSubmit={(task) => {
            if (selectedSubject) {
              if (editingTask) {
                updateTask(selectedSubject, task);
              } else {
                addTask(selectedSubject, task);
              }
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
