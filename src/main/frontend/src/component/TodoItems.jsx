import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import axios from 'axios';
import { useState } from 'react';
import TodoInsert from './TodoInsert';

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
  const [todos, setTodos] = useState();
  const selectedDate = useSelector((state) => state.today);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    axios.get(`/api/todos?date=${selectedDate}`).then((res) => setTodos(res.data));
  }, [selectedDate]);

  return (
    <Container>
      {todos !== undefined &&
        todos.map((todo, index) => <TodoItem title={todo.todoTitle} key={index} />)}
      {modal && <TodoInsert date={selectedDate} setModal={setModal} />}
      <Button onClick={() => setModal(true)}>+</Button>
    </Container>
  );
};

export default TodoItems;
