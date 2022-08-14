import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import TodoModifyModal from './TodoModifyModal';

const Todo = styled.div`
  font-size: 24px;
  border-bottom: 2px solid #efefef;
  height: 50px;
  display: flex;
  align-items: center;
`;

const TodoItem = React.memo(
  ({ data, setModifyModal }) => {
    console.log('TodoItem');
    return (
      <>
        <Todo
          onClick={() => {
            setModifyModal({ state: true, data: data });
          }}
        >
          {data.todoTitle}
        </Todo>
      </>
    );
  },
  (prev, next) => {
    if (prev.data !== next.data) {
      return false;
    }

    return true;
  },
);

export default TodoItem;
