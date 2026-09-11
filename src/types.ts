export interface Task {
  id: string;
  taskname: string;
  deadline: string;
  priority: string;
  progress: string;
}

export type TasksMap = {
  [taskId: string]: Task;
};

export type SubjectsMap = {
  [subjectName: string]: TasksMap;
};
