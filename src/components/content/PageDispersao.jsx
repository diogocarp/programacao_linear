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

const PageDispersao = () => {
  return (
    <Section>
      <Title>Método Simplex</Title>
      <Paragraph>
        O Método Simplex é um algoritmo desenvolvido por George Dantzig em 1947 para resolver problemas de <strong>programação linear</strong>. 
        Ele é utilizado quando se deseja <strong>maximizar ou minimizar</strong> uma função objetivo, sujeita a um conjunto de restrições lineares.
        Esse método revolucionou a forma de tomar decisões otimizadas em áreas como logística, produção, finanças e pesquisa operacional.
      </Paragraph>

      <SubTitle>Fundamentos da Programação Linear</SubTitle>
      <Paragraph>
        A Programação Linear busca encontrar o melhor valor (máximo ou mínimo) de uma função linear — chamada de função objetivo — respeitando restrições lineares. 
        As soluções válidas formam uma região viável, geralmente representada por um polígono ou politopo no espaço das variáveis.
      </Paragraph>

      <ImageContainer>
        <SectionImage 
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhrXcP6z77LAuWpyCEFfjd102XshQiVVjM1uTm1Of6rDn5tS9G9bg90yslI_q009LvdKvD6jZPVwB4u2ItIc1GpYaZacKes9pmhJpIEv-hhvymHXOtLhQupPeyYMQRiG2VgjCLMnEAmz60-o4KPeEW5LbA_DDSjsw24jn7twugTRv9VLwCGpCnzfeyR/s953/SIMPLEX.png" 
          alt="Representação gráfica do método Simplex"
          width={600}
        />
      </ImageContainer>

      <SubTitle>Como o Simplex Funciona</SubTitle>
      <Paragraph>
        O Simplex percorre os vértices da região viável formada pelas restrições até encontrar aquele que otimiza a função objetivo. 
        Ele parte de uma solução inicial viável básica e, a cada iteração, move-se para um vértice adjacente que melhora a solução, até que não seja mais possível melhorar.
      </Paragraph>

      <SubTitle>Aplicações do Método Simplex</SubTitle>
      <Paragraph>
        O Simplex é amplamente aplicado em:
        <ul>
          <li>Planejamento de produção industrial</li>
          <li>Distribuição de recursos em empresas</li>
          <li>Alocação de investimentos</li>
          <li>Roteirização de veículos e logística</li>
          <li>Gestão de estoques</li>
        </ul>
        Sua eficiência e flexibilidade o tornaram uma ferramenta essencial em ambientes corporativos e científicos.
      </Paragraph>

      <SubTitle>Vantagens e Limitações</SubTitle>
      <Paragraph>
        O Simplex é extremamente eficaz para problemas de grande porte com milhares de variáveis. No entanto, ele é aplicável apenas a problemas <strong>lineares</strong>. 
        Para problemas com funções objetivo ou restrições <strong>não lineares</strong>, métodos como programação inteira, quadrática ou heurísticas são mais adequados.
      </Paragraph>

      <SubTitle>Conclusão</SubTitle>
      <Paragraph>
        O Método Simplex é uma das ferramentas mais importantes da otimização matemática. 
        Sua estrutura lógica e eficiência computacional o tornam ideal para resolver uma ampla gama de problemas reais, permitindo decisões mais eficazes, econômicas e estratégicas.
      </Paragraph>
    </Section>
  );
};

export default PageDispersao;
