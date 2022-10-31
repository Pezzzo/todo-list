import React from 'react';
import { removeTodo, toggleTodo } from '../../state-handlers/state-handlers';
import { ITodoData } from '../../types/data';
import { Input, Item, Label, Text, DelTodoButton } from './styled';

interface ITodo {
  todos: ITodoData[];
  todo: ITodoData;
  setTodos: (todos: ITodoData[]) => void;
};

const Todo: React.FC<ITodo> = ({ todo, setTodos, todos }: ITodo) => {

  return (
    <Item>
      <Input
        id={`${todo.id}`}
        type='checkbox'
        checked={todo.status}
        onChange={() => toggleTodo(todo.id, todos, setTodos)}
      />
      <Label htmlFor={`${todo.id}`}>
        <Text status={todo.status}>{todo.text}</Text>
      </Label>
      <DelTodoButton onClick={() => removeTodo(todo.id, todos, setTodos)}>×</DelTodoButton>
    </Item>
  )
};

export default Todo;
