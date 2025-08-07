export interface Task {
  id: string; // shld be same as taskname -> to used to get the specific function
  taskname: string;
  deadline: string;
  priority: string;
  progress: "Not Started" | "In-progress" | "Completed";
}

export type TasksMap = {
  [taskId: string]: Task;
};

export type SubjectsMap = {
  [subjectName: string]: TasksMap;
};
