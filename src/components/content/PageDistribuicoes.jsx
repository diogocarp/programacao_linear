import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
  text-align: left;
  width: 1000px;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const SectionImage = styled.img`
  width: 610px;
  height: 200px;
  object-fit: cover;
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

const PageDistribuicoes = () => {
  return (
    <Section>
      <Title>Método Gráfico na Programação Linear</Title>
      <Paragraph>
        O método gráfico é uma técnica visual utilizada para resolver problemas de programação linear com duas variáveis.
        Ele permite identificar a melhor solução para um problema de otimização de forma intuitiva, através da representação
        gráfica das restrições e da função objetivo em um plano cartesiano.
      </Paragraph>

      <SubTitle>Representação das Restrições</SubTitle>
      <Paragraph>
        Cada restrição do problema é representada como uma reta no plano, delimitando uma região viável — ou seja, o conjunto
        de pontos que satisfazem todas as condições impostas. Essa região, geralmente um polígono, contém todas as possíveis
        soluções viáveis do problema.
      </Paragraph>

      <SubTitle>Função Objetivo</SubTitle>
      <Paragraph>
        A função objetivo, que queremos maximizar ou minimizar, também é representada como uma reta. Ao mover essa reta
        paralelamente dentro da região viável, conseguimos encontrar o ponto onde a função atinge seu valor máximo ou mínimo,
        respeitando as restrições.
      </Paragraph>

      <SubTitle>Solução Ótima</SubTitle>
      <Paragraph>
        A solução ótima está localizada em um dos vértices (pontos de interseção) da região viável. Por isso, no método gráfico,
        é comum calcular os vértices da região viável e testar cada um deles na função objetivo para determinar qual fornece
        o melhor resultado.
      </Paragraph>

      <ImageContainer>
        <SectionImage 
          src="https://www.geogebra.org/resource/e52b5g8m/OgwnjAG5epMgLDaI/material-e52b5g8m.png" 
          alt="Exemplo gráfico de programação linear"
        />
      </ImageContainer>

      <SubTitle>Exemplo Prático</SubTitle>
      <Paragraph>
        Suponha que uma empresa produza dois produtos A e B, e deseje maximizar o lucro com base em restrições de tempo e
        matéria-prima. Com o método gráfico, essas restrições são desenhadas no plano, delimitando a área de soluções possíveis.
        A linha da função objetivo se move até tocar o último ponto possível dentro da região viável — esse ponto fornece a
        melhor combinação de A e B.
      </Paragraph>

      <SubTitle>Vantagens e Limitações</SubTitle>
      <Paragraph>
        O método gráfico é simples e didático, sendo ideal para problemas com apenas duas variáveis. Porém, ele não é aplicável
        a problemas com três ou mais variáveis, onde se torna necessário o uso de métodos algorítmicos como o Simplex.
      </Paragraph>

      <SubTitle>Conclusão</SubTitle>
      <Paragraph>
        O método gráfico é uma ferramenta importante no ensino e na introdução à programação linear, ajudando a visualizar o
        conceito de região viável, restrições e otimização. Embora limitado em escala, ele oferece uma base sólida para a
        compreensão de problemas mais complexos.
      </Paragraph>
    </Section>
  );
};

export default PageDistribuicoes;
