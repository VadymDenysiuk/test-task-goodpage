import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  @media screen and (min-width: 320px) {
    max-width: 320px;
  }
  @media screen and (min-width: 480px) {
    max-width: 480px;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;
