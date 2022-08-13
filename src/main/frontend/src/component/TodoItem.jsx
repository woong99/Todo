import React from 'react';
import styled from 'styled-components';

const Todo = styled.div`
  font-size: 24px;
  border-bottom: 2px solid #efefef;
  height: 50px;
  display: flex;
  align-items: center;
`;

const TodoItem = ({ title }) => {
  return <Todo>{title}</Todo>;
};

export default TodoItem;
