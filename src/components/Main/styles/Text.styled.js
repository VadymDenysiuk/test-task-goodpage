import styled from 'styled-components';

export const Text = styled.p`
  -webkit-box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  text-align: center;
  color: #757575;
  @media screen and (min-width: 320px) {
    font-size: 16px;
    line-height: 1.1;
    padding: 3px;
    margin-bottom: 10px;
    :last-child {
      margin-bottom: 0;
    }
  }
  @media screen and (min-width: 480px) {
    font-size: 18px;
    line-height: 1.1;
    padding: 4px;
    margin-bottom: 10px;
    :last-child {
      margin-bottom: 0;
    }
  }
  @media screen and (min-width: 1200px) {
    font-size: 20px;
    line-height: 1.1;
    padding: 5px;
    margin-bottom: 10px;
    :last-child {
      margin-bottom: 0;
    }
  }
`;
