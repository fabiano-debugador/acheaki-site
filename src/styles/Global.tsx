import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 20px auto;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px 10px;

  @media (min-width: 768px) {
    gap: 20px;
  }
`;

const WidthMediaQuery = styled.div`
  max-width: 1180px;
  margin: auto;
  background: red;
  padding: 0 20px;

  @media (min-width: 1024px) {
    padding: initial;
  }
`;

export { Container, CardContainer, WidthMediaQuery };
