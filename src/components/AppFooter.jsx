import styled from 'styled-components';

const Footer = styled.footer`
height: 3rem;
  background-color: #2b2b2b;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #2F2F2F;
`;

const LeftText = styled.div`
  color: #ffffff;
  font-size: 1rem;
`;

const RightText = styled.div`
  color: #ffffff;
  font-size: 1rem;
`;

const AppFooter = () => {
  return (
    <Footer>
      <LeftText>WebQuest</LeftText>
      <RightText>Diogo - Todos os direitos reservados</RightText>
    </Footer>
  );
};

export default AppFooter;
