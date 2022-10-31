import React from 'react';
import { ITodoData } from '../../types/data';
import Todo from '../todo/todo';
import { List } from './styled';

interface ITodoList {
  todos: ITodoData[];
  setTodos: (todos: ITodoData[]) => void;
};

const TodoList: React.FC<ITodoList> = ({ todos, setTodos }: ITodoList) => {

  return (
    <List>
      {todos.map((todo) =>
        <Todo
          todo={todo}
          todos={todos}
          key={todo.id}
          setTodos={setTodos} />)}
    </List>
  )
};

export default TodoList;
