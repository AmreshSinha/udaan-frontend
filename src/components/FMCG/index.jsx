import styled from "styled-components";
import BrandImage from "../../assets/image1.png";
import LoadingBar from "../LoadingBar";

export default function FMCG() {
  const overdue = 35533;
  const used = 74544;
  const limit = 150000;
  return (
    <Wrapper>
      <PrimaryCard>
        <img src={BrandImage} alt="Brand Image"  />
        <Title>
          <h1>FMCG</h1>
        </Title>
        <Utilization>
          <h1>₹ {overdue} Overdue</h1>
          <div>
            <LoadingBar overdue={overdue} used={used} limit={limit} />
          </div>
          <div className="used-limit">
            <span>₹ {used}</span>
            <span>₹ {limit}</span>
          </div>
        </Utilization>
      </PrimaryCard>
      <BottomLabel>
        <h1>Pay Overdue to continue placing order</h1>
      </BottomLabel>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-width: 500px;
  min-height: 280px;
  background-color: #bd1b13;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
`;

const PrimaryCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  background: linear-gradient(#edf4fd, #c2d5ee);
  border-radius: inherit;

  padding: 1.5rem;

  img {
    position: absolute;
    top: 0;
    right: 0;
    width: 220px;
  }
`;

const BottomLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: inherit;

  padding: 1rem;
  h1 {
    color: #fff;
    font-weight: 700;
  }
`;

const Title = styled.div`
  h1 {
    text-transform: uppercase;

    font-size: 1.75rem;
    font-weight: 800;

    color: gray;

    /* width: fit-content;
    background: -webkit-linear-gradient(left, #1d2939, #2f3e52);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
  }
`;

const Utilization = styled.div`
  box-sizing: border-box;
  position: relative;

  z-index: 2;

    display: flex;
    flex-direction: column;
    gap: 0.75rem;

  h1 {
    color: #BD1B13;
    font-size: 1.5rem;
    font-weight: 800;
  }
  .used-limit {
    display: flex;
    justify-content: space-between;

    span {
        font-size: 1.25rem;
        font-weight: 600;
    }
  }
`;
