import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useState } from 'react';
import TodoInsertModal from './TodoInsertModal';
import TodoModifyModal from './TodoModifyModal';

const Container = styled.div`
  overflow: scroll;
  margin-bottom: 10px;
  border-top: 2px solid #efefef;
`;
const Button = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 5px #b8b8b8;
`;

const TodoItems = () => {
  const selectedDate = useSelector((state) => state.date);
  const [modal, setModal] = useState(false);
  const [modifyModal, setModifyModal] = useState(false);
  const todos = useSelector((state) => state.todos.getTodos);
  return (
    <Container>
      {todos !== undefined &&
        todos
          .filter((todo) => todo.todoDate === selectedDate.today)
          .map((todo, index) => (
            <TodoItem data={todo} key={index} setModifyModal={setModifyModal} />
          ))}
      {modal && <TodoInsertModal date={selectedDate} setModal={setModal} />}
      {modifyModal && (
        <TodoModifyModal
          data={modifyModal.data}
          date={selectedDate}
          modifyModal={modifyModal}
          setModifyModal={setModifyModal}
        ></TodoModifyModal>
      )}
      <Button onClick={() => setModal(true)}>+</Button>
    </Container>
  );
};

export default TodoItems;
