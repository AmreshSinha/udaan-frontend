import styled from 'styled-components'
import FMCG from './components/FMCG';

function App() {

  return (
    <Screen>
      <FMCG />
    </Screen>
  )
}

export default App;


const Screen = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #1f1f1f;

  display: flex;
  justify-content: center;
  align-items: center;
`