import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { useState } from 'react';
import axios from 'axios';

const Container = styled.div`
  width: 95%;
  height: 100%;
  background-color: white;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  margin: auto;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  z-index: 1;
  font-size: 16px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #efefef;
`;
const BlackButton = styled.div`
  width: 70px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
`;

const GrayButton = styled.div`
  width: 70px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #9b9b9b;
  font-size: 16px;
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
const Title = styled.input`
  border: none;
  background-color: #f2f2f6;
  margin-bottom: 10px;
  height: 40px;
  border-radius: 3px;
  &:focus {
    outline: none;
  }
`;
const Content = styled.textarea`
  border: none;
  background-color: #f2f2f6;
  height: 100px;
  border-radius: 3px;
  resize: none;
  &:focus {
    outline: none;
  }
`;
const ContentLength = styled.div`
  text-align: right;
`;
const TodoInsertModal = ({ date, setModal }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const changeContent = (e) => {
    setContent(e.target.value);
  };
  const addTodo = () => {
    axios
      .post('/api/add', {
        todoTitle: title,
        todoContent: content,
      })
      .then((res) => console.log(res))
      .then(() => setModal(false));
  };
  return (
    <Container>
      <Header>
        <BlackButton onClick={() => setModal(false)}>닫기</BlackButton>
        {moment(date).format('YYYY년 MM월 DD일')}
        {title ? <BlackButton onClick={addTodo}>완료</BlackButton> : <GrayButton>완료</GrayButton>}
      </Header>
      <Contents>
        <Title type="text" placeholder="제목" maxLength="20" onChange={changeTitle} />
        <Content placeholder="내용" maxLength="50" onChange={changeContent} />
        <ContentLength> {content.length} / 50</ContentLength>
      </Contents>
    </Container>
  );
};

export default TodoInsertModal;
