type TodoType = string;
type CompletedType = boolean;
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
