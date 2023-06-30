export type TodoType = string;
export type CompletedType = boolean;
export interface Auth {
  email: string;
  password: string;
}
export interface PostTodo {
  todo: TodoType;
}
export interface UpdateTodo {
  todo: TodoType;
  isCompleted: CompletedType;
}

export interface ITodoItem extends UpdateTodo {
  id: number;
  updateFunction: () => Promise<void>;
}

export interface ITodoObject extends UpdateTodo {
  id: number;
  userId: number;
}
