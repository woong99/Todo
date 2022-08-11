import React from 'react';
import styled from 'styled-components';

const Todo = styled.div`
  font-size: 24px;
  border-top: 2px solid #efefef;
`;

const TodoItem = ({ todo, selectedDate }) => {
  return (
    <Todo>
      {todo.data}
      {todo.date}
    </Todo>
  );
};

export default TodoItem;
