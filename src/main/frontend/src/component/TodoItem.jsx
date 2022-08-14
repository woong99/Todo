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

const TodoItem = ({ data, setModifyModal, modifyModal }) => {
  return (
    <>
      <Todo
        onClick={() => {
          setModifyModal({ state: true, data: data });
        }}
      >
        {data.todoTitle}
      </Todo>
      {modifyModal && (
        <TodoModifyModal
          data={data}
          modifyModal={modifyModal}
          setModifyModal={setModifyModal}
        ></TodoModifyModal>
      )}
    </>
  );
};

export default TodoItem;
