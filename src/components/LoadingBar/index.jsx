import styled from "styled-components";

export default function LoadingBar({ overdue, used, limit }) {
  const usedPercentage = (used / limit) * 100;
  const overduePercentage = (overdue / limit) * 100;

  return (
    <Wrapper>
      <OverduePercentage $percentage={overduePercentage} />
      <UsedPercentage $percentage={usedPercentage} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  height: 0.5rem;
  border-radius: 999999px;
  width: 100%;
  background-color: #f1f1f1;
`;

const OverduePercentage = styled.div`
  position: absolute;
  z-index: 2;
  height: 100%;
  border-radius: inherit;
  width: ${(props) => props.$percentage}%;

  background-color: #BD1B13;
`;

const UsedPercentage = styled.div`
  position: absolute;
  height: 100%;
  border-radius: inherit;
  width: ${(props) => props.$percentage}%;

  background-color: #1d2939;
`;
