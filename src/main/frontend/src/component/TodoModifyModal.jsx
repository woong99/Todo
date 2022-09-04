import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { action } from '../redux/modules/todos';

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
const DeleteButton = styled.div`
  width: 100%;
  text-align: center;
  border-top: 1px solid #efefef;
  position: absolute;
  bottom: 0;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center; ;
`;
const TodoModifyModal = ({ data, date, modifyModal, setModifyModal }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(modifyModal.data.todoTitle);
  const [content, setContent] = useState(modifyModal.data.todoContent);
  const [modify, setModify] = useState(true);

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const changeContent = (e) => {
    setContent(e.target.value);
  };

  const deleteTodo = () => {
    axios
      .delete('/api/todo', {
        params: {
          id: modifyModal.data.todoId,
        },
      })
      .then(() => dispatch(action.getTodos(date.month)).unwrap())
      .then(() => setModifyModal(false));
  };
  const modifyTodo = () => {
    axios
      .put(`/api/modify?id=${modifyModal.data.todoId}`, {
        todoTitle: title,
        todoContent: content,
      })
      .then(() => dispatch(action.getTodos(date.month)).unwrap())
      .then(() => setModifyModal(false));
  };
  return (
    <Container>
      <Header>
        <BlackButton
          onClick={() => {
            setModifyModal(false);
          }}
        >
          닫기
        </BlackButton>
        {moment(data.todoDate).format('YYYY년 MM월 DD일')}
        {modify && <BlackButton onClick={() => setModify(false)}>수정</BlackButton>}
        {!modify &&
          (title ? (
            <BlackButton onClick={() => modifyTodo()}>완료</BlackButton>
          ) : (
            <GrayButton>완료</GrayButton>
          ))}
      </Header>
      <Contents>
        {modify ? (
          <Title
            type="text"
            placeholder="제목"
            maxLength="20"
            value={title}
            readOnly
            onChange={changeTitle}
          />
        ) : (
          <Title
            type="text"
            placeholder="제목"
            maxLength="20"
            value={title}
            onChange={changeTitle}
          />
        )}
        {modify ? (
          <Content
            placeholder="내용"
            maxLength="50"
            value={content}
            readOnly
            onChange={changeContent}
          />
        ) : (
          <Content placeholder="내용" maxLength="50" value={content} onChange={changeContent} />
        )}
        {!modify && <ContentLength> {content.length} / 50</ContentLength>}
      </Contents>
      <DeleteButton onClick={() => deleteTodo()}>삭제</DeleteButton>
    </Container>
  );
};

export default TodoModifyModal;
