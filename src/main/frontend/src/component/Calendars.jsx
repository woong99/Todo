/* eslint-disable no-loop-func */
import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMonth, loadToday } from '../redux/modules/today';

const CalendarContainer = styled.div`
  /* width: 400px; */
  width: 100%;
`;
const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  height: 50px;
`;
const PrevBtn = styled.button`
  width: 30px;
  background: none;
  outline: none;
  border: none;
`;
const NextBtn = styled.button`
  width: 30px;
  background: none;
  outline: none;
  border: none;
`;
const CalendarDays = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  font-weight: 700;
`;
const CalendarDay = styled.div``;

const CalendarTable = styled.table`
  width: 100%;
`;
const CalendarTd = styled.td`
  text-align: center;
  height: 45px;
  width: calc(100% / 7);
  position: relative;
`;
const SelectedDay = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -20px;
  margin-top: -20px;
  width: 40px;
  height: 40px;
  background-color: #4b4b4b;
  color: white;
  border-radius: 50%;
`;
const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #808080;
  position: absolute;
  left: 50%;
  bottom: 5px;
  margin-left: -3px;
  margin-top: -3px;
`;
const Calendars = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.getTodos);
  const [getMoment, setMoment] = useState(moment());
  const today = getMoment;
  const [selectedDay, setSelectedDay] = useState(today.format('YYYY-MM-DD'));
  useEffect(() => {
    dispatch(loadToday(moment(selectedDay).format('YYYY-MM-DD')));
    dispatch(loadMonth(moment(selectedDay).format('YYYY-MM')));
  }, [dispatch, selectedDay]);
  const firstWeek = today.clone().startOf('month').week();
  const lastWeek =
    today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

  const calendarArr = () => {
    let result = [];
    let week = firstWeek;
    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <tr key={week}>
          {Array(7)
            .fill(0)
            .map((data, index) => {
              let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');
              if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
                return (
                  <CalendarTd
                    key={index}
                    style={{ color: 'red' }}
                    data-date={days.format('YYYY-MM-DD')}
                    onClick={(e) => setSelectedDay(e.currentTarget.dataset.date)}
                  >
                    {selectedDay === days.format('YYYY-MM-DD') ? (
                      <SelectedDay>{days.format('D')}</SelectedDay>
                    ) : (
                      <span>{days.format('D')}</span>
                    )}
                    {todos?.find((e) => e.todoDate === days.format('YYYY-MM-DD')) && <Dot />}
                  </CalendarTd>
                );
              } else if (days.format('MM') !== today.format('MM')) {
                return (
                  <CalendarTd
                    key={index}
                    style={{ color: '#c7c7c7' }}
                    data-date={days.format('YYYY-MM-DD')}
                    onClick={(e) => {
                      setSelectedDay(e.currentTarget.dataset.date);
                    }}
                  >
                    {selectedDay === days.format('YYYY-MM-DD') ? (
                      <SelectedDay>{days.format('D')}</SelectedDay>
                    ) : (
                      <span>{days.format('D')}</span>
                    )}
                    {todos?.find((e) => e.todoDate === days.format('YYYY-MM-DD')) && <Dot />}
                  </CalendarTd>
                );
              } else {
                return (
                  <CalendarTd
                    key={index}
                    data-date={days.format('YYYY-MM-DD')}
                    onClick={(e) => setSelectedDay(e.currentTarget.dataset.date)}
                  >
                    {selectedDay === days.format('YYYY-MM-DD') ? (
                      <SelectedDay>{days.format('D')}</SelectedDay>
                    ) : (
                      <span>{days.format('D')}</span>
                    )}
                    {todos?.find((e) => e.todoDate === days.format('YYYY-MM-DD')) && <Dot></Dot>}
                  </CalendarTd>
                );
              }
            })}
        </tr>,
      );
    }
    return result;
  };

  return (
    <CalendarContainer>
      <CalendarHeader>
        <PrevBtn
          onClick={() => {
            setMoment(getMoment.clone().subtract(1, 'month'));
            dispatch(loadMonth(getMoment.clone().subtract(1, 'month').format('YYYY-MM')));
          }}
        >
          &lt;
        </PrevBtn>
        {today.format('YYYY 년 MM 월')}
        <NextBtn
          onClick={() => {
            setMoment(getMoment.clone().add(1, 'month'));
            dispatch(loadMonth(getMoment.clone().add(1, 'month').format('YYYY-MM')));
          }}
        >
          &gt;
        </NextBtn>
      </CalendarHeader>
      <CalendarDays>
        <CalendarDay>월</CalendarDay>
        <CalendarDay>화</CalendarDay>
        <CalendarDay>수</CalendarDay>
        <CalendarDay>목</CalendarDay>
        <CalendarDay>금</CalendarDay>
        <CalendarDay>토</CalendarDay>
        <CalendarDay>일</CalendarDay>
      </CalendarDays>
      <CalendarTable>
        <tbody>{calendarArr()}</tbody>
      </CalendarTable>
    </CalendarContainer>
  );
};

export default Calendars;
