import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
  text-align: left;
  width: 1000px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  color: #ffffff;
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  color: #ffffff;
  line-height: 1.5;
  margin: 1rem 0;
`;

const SubTitle = styled.h3`
  font-size: 1.6rem;
  color: #ffffff;
  margin-top: 2rem;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const SectionImage = styled.img`
  width: 400px;
  height: 220px;
  object-fit: cover;
`;

const PageSobre = () => {
  return (
    <Section>
      <Title>História da Programação Linear</Title>
      <Paragraph>
        A programação linear surgiu durante a Segunda Guerra Mundial como uma ferramenta para otimizar recursos limitados em problemas de logística e
        planejamento militar. Desde então, ela se tornou fundamental para resolver problemas de otimização em diversas áreas como economia, engenharia, transporte e indústria.
      </Paragraph>

      <SubTitle>George Dantzig</SubTitle>
      <Paragraph>
        George Dantzig é considerado o pai da programação linear por ter desenvolvido o método Simplex em 1947, uma técnica revolucionária para encontrar soluções ótimas em problemas lineares com múltiplas variáveis e restrições. Seu trabalho abriu caminho para a aplicação prática da programação linear em larga escala.
      </Paragraph>
      <ImageContainer>
        <SectionImage 
          src="https://i.blogs.es/260744/george-dantzig/450_1000.jpg" 
          alt="George Dantzig" 
        />
      </ImageContainer>

      <SubTitle>John von Neumann</SubTitle>
      <Paragraph>
        John von Neumann contribuiu para o desenvolvimento teórico da programação linear e da teoria dos jogos, que tem conexões estreitas com problemas de otimização. Sua pesquisa ajudou a fundamentar a matemática por trás da programação linear e ampliar suas aplicações em diversas áreas.
      </Paragraph>
      <ImageContainer>
        <SectionImage 
          src="https://images.squarespace-cdn.com/content/v1/5bf28ad6b98a7888bf3cdce5/4329bfa8-45f1-4307-969c-361f86edd834/Johnny+jpeg+cropped.jpg" 
          alt="John von Neumann" 
        />
      </ImageContainer>

      <SubTitle>Aplicações Atuais</SubTitle>
      <Paragraph>
        Hoje, a programação linear é usada para otimizar cadeias de suprimentos, alocação de recursos, planejamento financeiro, roteirização de veículos, produção industrial, e muito mais. Ferramentas computacionais modernas permitem resolver problemas com milhares de variáveis e restrições, tornando a programação linear indispensável no mundo dos negócios e da engenharia.
      </Paragraph>
    </Section>
  );
};

export default PageSobre;
