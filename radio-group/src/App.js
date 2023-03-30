import styled from 'styled-components';

function App() {
  return <RootWrap></RootWrap>;
}

export default App;

const RootWrap = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  max-width: 500px;

  left: 50%;
  transform: translate(-50%, 0);

  background-color: white;
`;
