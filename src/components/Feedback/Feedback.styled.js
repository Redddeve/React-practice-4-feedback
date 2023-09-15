import styled from 'styled-components';

export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
`;

export const Button = styled.button`
  width: 120px;
  height: 40px;
  background-color: lightcyan;
  color: black;
  border: 1px solid darkgray;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: teal;
    color: white;
  }
`;
