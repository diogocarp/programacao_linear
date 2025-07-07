import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
  text-align: left;
  max-width: 900px;
  margin: 0 auto;
  color: #ffffff;
`;

const Title = styled.h2`
  text-align: center;
  margin-top: 2rem;
  font-size: 2.5rem;
`;

const Intro = styled.p`
  font-size: 1.3rem;
  line-height: 1.6;
  margin-top: 1.5rem;
`;

const Profiles = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const Profile = styled.div`
  text-align: center;
`;

const ProfileImage = styled.img`
  object-fit: cover;
  margin-bottom: 0.5rem;
`;

const ProfileName = styled.h3`
  font-size: 1.2rem;
  margin: 0;
`;

const PageInicio = () => {
  return (
    <Section>
      

      <Title>Programação Linear</Title>

      <Intro>
        Programação Linear é uma técnica matemática usada para resolver problemas de otimização, onde se busca maximizar ou minimizar uma função linear, 
        respeitando um conjunto de restrições lineares. Ela é amplamente aplicada em áreas como economia, engenharia, logística e planejamento, 
        para encontrar a melhor solução possível dentro de limites definidos.
      </Intro>

      <Profiles>
        <Profile>
          <ProfileImage 
            src="https://emgotas.com/wp-content/uploads/2016/11/programac3a7c3a3o-linear.jpg" 
            alt="Programação Linear" 
          />
        </Profile>
      </Profiles>

      <Intro>
        Os principais elementos da programação linear incluem a função objetivo, que representa o valor a ser maximizado ou minimizado, as variáveis de decisão, 
        que são as incógnitas do problema, e as restrições, que limitam o espaço das soluções possíveis. 
      </Intro>

      <Intro>
        Exemplos típicos envolvem maximizar o lucro ou minimizar o custo, considerando limitações como recursos disponíveis, tempo e capacidade produtiva. 
        Métodos como o Simplex ou soluções gráficas são utilizados para encontrar a solução ótima.
      </Intro>
    </Section>
  );
}

export default PageInicio;
