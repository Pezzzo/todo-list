import React, { useEffect, useState } from 'react';
import { removeCompletedTodo, todoFilter } from '../../state-handlers/state-handlers';
import { ITodoData } from '../../types/data';
import { Wrapper, List, Item, Button, ButtonAll, ButtonActive, ButtonCompleted, P, ButtonWrapper } from './styled';

interface IFilters {
  todos: ITodoData[];
  setTodos: (todos: ITodoData[]) => void;
  setFilteredTodos: (todos: ITodoData[]) => void;
};

const Filters: React.FC<IFilters> = ({ todos, setFilteredTodos, setTodos }: IFilters) => {

  const [plural, setPlural] = useState<string>('');
  const [checked, setChecked] = useState<boolean | string>('all');

  const buttonHandler = (value: boolean | string) => {
    todoFilter(value, todos, setFilteredTodos);
    setChecked(value);
  };

  const removeAllCompletedTodos = () => {
    removeCompletedTodo(true, todos, setTodos);
    setChecked('all');
  };

  let newTodos = [...todos].filter(todo => todo.status === false);

  // единственное или множественное число
  const showActiveTodo = () => {
    if (newTodos.length > 1) {
      setPlural('s');
    } else {
      setPlural('');
    }
  };

  useEffect(() => {
    showActiveTodo();
  },);

  return (
    <Wrapper>
      {
        newTodos.length > 0 ?
          <P>{newTodos.length} item{plural} left</P> :
          <P>no items</P>
      }
      <List>
        <Item>
          <ButtonAll
            chosen={checked}
            onClick={() => buttonHandler('all')}
          >All</ButtonAll>
        </Item>
        <Item>
          <ButtonActive
            chosen={checked}
            onClick={() => buttonHandler(false)}
          >Active</ButtonActive>
        </Item>
        <Item>
          <ButtonCompleted
            chosen={checked}
            onClick={() => buttonHandler(true)}
          >Completed</ButtonCompleted>
        </Item>
      </List>
      <ButtonWrapper>
        <Button onClick={removeAllCompletedTodos}
        >Clear completed</Button>
      </ButtonWrapper>
    </Wrapper>
  )
};

export default Filters;
