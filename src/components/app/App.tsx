import React, { useEffect, useState } from 'react';
import { GlobalStyle, Title, Wrapper } from './styled';
import { ITodoData } from '../../types/data';
import Form from '../form/form';
import TodoList from '../todo-list/todo-list';
import Filters from '../filters/filters';

const App: React.FC = () => {

  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodoData[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<ITodoData[]>([]);

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos])

  return (
    <>
      <GlobalStyle />
      <main>
        <Title>todos</Title>
        <Wrapper>
          <Form
            value={value}
            todos={todos}
            setValue={setValue}
            setTodos={setTodos}
          />
          <TodoList
            todos={filteredTodos}
            setTodos={setTodos}
          />
          <Filters
            todos={todos}
            setFilteredTodos={setFilteredTodos}
            setTodos={setTodos}
          />
        </Wrapper>
      </main>
    </>
  );
};

export default App;
