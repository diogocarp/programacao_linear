import styled from "styled-components";

const Section = styled.section`
  padding: 2rem;
  text-align: left;
  width: 1000px;
  height: auto;
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
const PageBlog = () => {
    return (
       <Section>
        <Title>Sobre o Blog</Title>
        <Paragraph>
        O trabalho WebQuest, proposto pelo professor Luciano O. Condori, para a disciplina de Programação Linear, do quinto semestre do curso de ADS, é elaborar um trabalho sobre a História da Programação Linear e suas aplicações matemáticas.
        </Paragraph>
        <Paragraph>Autores: Diogo Carpinelli</Paragraph>
        <Paragraph>RA: 1430482313001</Paragraph>
        <Paragraph>Instituição: FATEC Carapicuíba</Paragraph>
        <Paragraph>Curso: Análise e Desenvolvimento de Sistemas</Paragraph>
        <Paragraph>E-mails: diogo.santos62@fatec.sp.gov.br</Paragraph>

       </Section>

    )
}

export default PageBlog;