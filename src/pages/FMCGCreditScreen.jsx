import styled from 'styled-components'
import FMCGCreditPay from '../components/FMCGCreditPay';

function FMCGCreditScreen() {

  return (
    <Screen>
      <FMCGCreditPay />
    </Screen>
  )
}

export default FMCGCreditScreen;


const Screen = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #1f1f1f;

  display: flex;
  justify-content: center;
  align-items: center;
`