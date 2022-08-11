import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const Container = styled.div`
  overflow: scroll;
  margin-bottom: 60px;
`;
const TodoItems = () => {
  const todos = useSelector((state) => state.todos);
  const selectedDate = useSelector((state) => state.today);
  console.log(todos);

  return (
    <Container>
      {todos
        .filter((todo) => todo.date === selectedDate)
        .map((todo, index) => (
          <TodoItem todo={todo} selectedDate={selectedDate} key={index} />
        ))}
    </Container>
  );
};

export default TodoItems;
