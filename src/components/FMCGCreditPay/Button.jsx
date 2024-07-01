import styled from "styled-components";

export default function Button({ text }) {
  return <CustomButton>{text}</CustomButton>;
}

const CustomButton = styled.button`
  all: unset;

  border-radius: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;

  background-color: #1271ed;

  width: 100%;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
