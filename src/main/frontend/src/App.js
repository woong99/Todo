import { Container } from 'react-bootstrap';
import 'react-calendar/dist/Calendar.css';
import Calendars from './component/Calendars';
import styled from 'styled-components';
import TodoItems from './component/TodoItems';

const StyledContainer = styled(Container)`
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  max-height: 848px;
  background-color: white;
`;

const Header = styled.div`
  height: 100px;
  background-color: red;
  position: absolute;
  top: 50px;
  bottom: 0;
  left: 0;
  bottom: 0;
  padding: 0 0 calc(env(safe-area-inset-top) + 5px);
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
      {/* <Header></Header> */}
      <StyledContainer>
        <Calendars />
        <TodoItems />
      </StyledContainer>
    </div>
  );
}

export default App;
