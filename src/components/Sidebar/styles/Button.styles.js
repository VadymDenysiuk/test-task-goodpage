import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 4px;
  min-width: 60px;
  height: 35px;
  color: #ffffff;
  background-color: #2196f3;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.01;
  cursor: pointer;
  border: none;
  -webkit-transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #188ce8;
  }
`;
