import { Container } from 'react-bootstrap';
import 'react-calendar/dist/Calendar.css';
import Calendars from './component/Calendars';
import styled from 'styled-components';
import TodoItems from './component/TodoItems';

const StyledContainer = styled(Container)`
  height: calc(var(--vh, 1vh) * 100);
  max-width: 425px;
  display: flex;
  flex-direction: column;
  max-height: 848px;
  background-color: white;
  position: relative;
`;

function App() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
  return (
    <div>
      <StyledContainer>
        <Calendars />
        <TodoItems />
      </StyledContainer>
    </div>
  );
}

export default App;
