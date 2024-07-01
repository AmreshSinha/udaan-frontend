import styled from "styled-components"
import Button from "./Button"
import BrandImage from "../../assets/image1.png";

export default function FMCGCreditPay() {
    return (
        <Wrapper>
            <UpperCard>
                <TextCard>
                    <img src={BrandImage} alt="Brand Image" />
                    <h1>FMCG Credit</h1>
                    <p>Overdue Payment Mandatory</p>
                </TextCard>
                <Details></Details>
                <Options></Options>
            </UpperCard>
            <InputArea></InputArea>
            <Button text="Collect payment" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const UpperCard = styled.div`
width: 100%;
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: center;

`

const TextCard = styled.div`
position: relative;
width: 100%;

  background: linear-gradient(#edf4fd, #c2d5ee);
  border-radius: inherit;

  padding: 1.5rem;

  img {
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    z-index: 1;
  }

  h1 {
    z-index: 2;
    font-size: 1.5rem;
    font-weight: 700;
  }

  p {
    z-index: 2;
  }
`
const Details = styled.div``
const Options = styled.div``

const InputArea = styled.div``