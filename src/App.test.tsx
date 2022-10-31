import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './components/app/App';
import userEvent from '@testing-library/user-event';
import Form from './components/form/form';
import { ITodoData } from './types/data';

describe('App Component', () => {

  it('Form render', () => {
    render(<Form todos={[]} value={''} setValue={function (value: string): void {
      throw new Error('Function not implemented.');
    } } setTodos={function (todos: ITodoData[]): void {
      throw new Error('Function not implemented.');
    } } />);
  });

  it('input focus', () => {
    render(<App />);
    const input = screen.getByRole<HTMLInputElement>('textbox');
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();

  });

  it('empty input value', async () => {
    render(<App />);

    expect(screen.getByRole<HTMLInputElement>('textbox').value).toBe('');
    userEvent.click(screen.getByRole('button', { name: '+' }));
    expect(screen.queryByRole('checkbox')).not.toBeInTheDocument();
  });

  it('add todo with mouse', async () => {
    render(<App />);

    userEvent.type(screen.getByPlaceholderText<HTMLInputElement>('Add todo'), 'mouse');
    expect(screen.getByRole<HTMLInputElement>('textbox').value).toBe('mouse');
    userEvent.click(screen.getByRole('button', { name: '+' }));
    expect(await screen.findByText('mouse')).toBeInTheDocument();
  });

  it('add todo with keyboard', async () => {
    render(<App />);

    const input = screen.getByPlaceholderText<HTMLInputElement>('Add todo');
    userEvent.type(screen.getByPlaceholderText<HTMLInputElement>('Add todo'), 'keyboard');
    expect(screen.getByRole<HTMLInputElement>('textbox').value).toBe('keyboard');
    fireEvent.keyDown(input, { key: 'Enter', code: 13 });
    expect(await screen.findByText('keyboard')).toBeInTheDocument();
  });

  it('select and remove todo', async () => {
    render(<App />);

    userEvent.type(screen.getByPlaceholderText<HTMLInputElement>('Add todo'), 'test');
    expect(screen.getByRole<HTMLInputElement>('textbox').value).toBe('test');
    userEvent.click(screen.getByRole('button', { name: '+' }));
    expect(await screen.findByRole('checkbox')).toBeInTheDocument();

    const checkbox = screen.getByRole<HTMLInputElement>('checkbox');
    expect(checkbox).not.toBeChecked();
    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    const delButton = screen.getByRole<HTMLButtonElement>('button', { name: '×' });
    userEvent.click(delButton);
    expect(screen.queryByRole<HTMLButtonElement>('button', { name: '×' })).not.toBeInTheDocument();
    expect(screen.queryByRole<HTMLInputElement>('checkbox')).not.toBeInTheDocument();
    expect(screen.queryByText('test')).not.toBeInTheDocument();
  });
});



