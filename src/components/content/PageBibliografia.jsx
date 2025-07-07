import styled from "styled-components";

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

const PageBibliografia = () => {
  return (
    <Section>
      <Title>Bibliografia</Title>

      <Paragraph>
        Dantzig, G. B. (1963). <i>Linear Programming and Extensions</i>. Princeton University Press.
      </Paragraph>

      <Paragraph>
        Hillier, F. S., & Lieberman, G. J. (2020). <i>Introduction to Operations Research</i>. McGraw-Hill Education.
      </Paragraph>

      <Paragraph>
        Winston, W. L. (2004). <i>Operations Research: Applications and Algorithms</i>. Thomson Brooks/Cole.
      </Paragraph>

      <Paragraph>
        Bazaraa, M. S., Jarvis, J. J., & Sherali, H. D. (2010). <i>Linear Programming and Network Flows</i>. Wiley.
      </Paragraph>

      <Paragraph>
        Taha, H. A. (2016). <i>Operations Research: An Introduction</i>. Pearson Education.
      </Paragraph>

      <Paragraph>
        Chvátal, V. (1983). <i>Linear Programming</i>. W. H. Freeman.
      </Paragraph>

      <Paragraph>
        Murty, K. G. (1983). <i>Linear Programming</i>. Wiley.
      </Paragraph>

      <Paragraph>
        Vanderbei, R. J. (2014). <i>Linear Programming: Foundations and Extensions</i>. Springer.
      </Paragraph>

      <Paragraph>
        Nemhauser, G. L., & Wolsey, L. A. (1988). <i>Integer and Combinatorial Optimization</i>. Wiley.
      </Paragraph>
    </Section>
  );
};

export default PageBibliografia;
