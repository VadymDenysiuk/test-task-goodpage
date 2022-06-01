import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  -webkit-box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  color: #212121;
  @media screen and (min-width: 320px) {
    font-size: 26px;
    line-height: 1.19;
    margin-bottom: 15px;
  }
  @media screen and (min-width: 480px) {
    font-size: 28px;
    line-height: 1.18;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 36px;
    line-height: 1.17;
    margin-bottom: 25px;
  }
`;
