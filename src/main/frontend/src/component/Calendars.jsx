import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Calendar } from 'react-calendar';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadToday } from '../redux/modules/today';

const CalendarContainer = styled.div`
  .react-calendar {
    border: none;
    margin: 0 auto;
    width: 400px;
  }
  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
  }

  .react-calendar__tile--now {
    color: #d4554c;
    background-color: #fff;
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background-color: white;
    color: #d4554c;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: transparent;
  }
  .react-calendar__tile:enabled:hover abbr,
  .react-calendar__tile:enabled:focus abbr {
    background-color: #4e4e4e;
    color: white;
  }

  .react-calendar__tile--active {
    background: transparent;
    color: green;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background-color: transparent;
    color: green;
  }
  .react-calendar__tile--active:enabled:hover .react-calendar__tile abbr,
  .react-calendar__tile--active:enabled:focus .react-calendar__tile abbr {
    background-color: #4b4b4b;
    color: white;
  }

  .react-calendar__tile {
    max-width: 100%;
    padding: 6px 6px;
    border-radius: 50%;
    text-align: center;
    line-height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-calendar__tile abbr {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #484848;
  }
  .react-calendar__month-view__days__day--weekend {
    color: black;
  }

  .react-calendar__month-view__days__day--neighboringMonth abbr {
    color: #aaaaaa;
  }
  .react-calendar__tile--now abbr {
    color: #d4554c;
    background-color: #fff;
  }
  .react-calendar__tile--active abbr {
    background: #4b4b4b;
    color: white;
  }
`;
const Calendars = () => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(new Date());
  useEffect(() => {
    dispatch(loadToday(moment(selectedDate).format('YYYY-MM-DD')));
  }, [selectedDate]);

  return (
    <CalendarContainer>
      <Calendar
        calendarType="US"
        formatDay={(locale, date) => moment(date).format('D')}
        onChange={setSelectedDate}
        value={selectedDate}
      />
    </CalendarContainer>
  );
};

export default Calendars;
