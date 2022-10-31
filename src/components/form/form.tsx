import React from 'react';
import { addTodo } from '../../state-handlers/state-handlers';
import { ITodoData } from '../../types/data';
import { StyledForm, Input, Button } from './styled';


interface ITodoList {
  todos: ITodoData[];
  value: string,
  setValue: (value: string) => void,
  setTodos:(todos: ITodoData[]) => void;
};

const Form = ({ value, todos, setValue, setTodos }: ITodoList) => {

  const inputChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    setValue(evt.target.value);
  };

  const inputKeyHandler: React.KeyboardEventHandler<HTMLInputElement> = (evt) => {
    if (!value) {
      return;
    }
    if (evt.key === 'Enter') {
      evt.preventDefault();
      addTodo(value, todos, setTodos, setValue);
    }
  };

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    if (!value) {
      return;
    }
    addTodo(value, todos, setTodos, setValue);
  };

  const cleanInput: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    evt.target.value = '';
  }

  return (
      <StyledForm action="#" onSubmit={submitHandler}>
        <Input
        value={value}
        onFocus={cleanInput}
        onChange={inputChangeHandler}
        onKeyDown={inputKeyHandler}
        type="text"
        placeholder="Add todo"
        required/>
        <Button type="submit">+</Button>
      </StyledForm>
  )
};

export default Form;
