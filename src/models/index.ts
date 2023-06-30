export interface IAuth {
  email: string;
  password: string;
}

export type ToDo = {
  todo: string;
  isCompleted: boolean;
};

export type OnlyToDo = Pick<ToDo, "todo">;

export type ToDoObject = ToDo & {
  id: number;
  userId: number;
};

export type ToDoLi = ToDo & {
  id: number;
  updateFunction: () => Promise<void>;
};
