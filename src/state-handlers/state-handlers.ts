import { ITodoData } from "../types/data";

const addTodo = (
  value: string,
  todos: ITodoData[],
  cb: (todos: ITodoData[]) => void,
  setValue: (text: string) => void): void => {

  cb([...todos, {
    id: Date.now(),
    text: value,
    status: false,
  }])
  setValue('');
};

const removeTodo = (
  id: number,
  todos: ITodoData[],
  cb: (todos: ITodoData[]) => void): void => {

  cb(todos.filter(todo => todo.id !== id));
};

const toggleTodo = (
  id: number,
  todos: ITodoData[],
  cb: (todos: ITodoData[]) => void): void => {

  cb(todos.map((todo) => {
    if (todo.id === id) {
      todo.status = !todo.status
    }
    return todo;
  }));
};

const removeCompletedTodo = (
  status: boolean,
  todos: ITodoData[],
  cb: (todos: ITodoData[]) => void): void => {

  let newTodos = [...todos].filter(todo => todo.status !== status);
  cb(newTodos);
};

const todoFilter = (
  display: boolean | string,
  todos: ITodoData[],
  cb: (todos: ITodoData[]) => void): void => {

  if (display === 'all') {
    cb(todos);
  } else {
    let newTodos = [...todos].filter(todo => todo.status === display)
    cb(newTodos);
  }
};

export {
  addTodo,
  removeTodo,
  toggleTodo,
  removeCompletedTodo,
  todoFilter,
}
