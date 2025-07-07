import styled from 'styled-components';
const Section = styled.section`
  padding: 2rem;
  text-align: left;
  width: 1000px;
  margin: 0 auto;
  

`;

const VideoSection = styled.section`
    display:flex;
  justify-content: center;
  margin: 2rem;
`;

const Title = styled.h2`
  text-align: center;
  color: #ffffff;
`;

const Video = styled.iframe`
    width: 700px;
    height: 400px;

    
`;

const VideoLine = styled.hr`
    width: 750px;
    color: #f8f9fa;
`


const PageExercicios= () => {
    return (
        <Section>
            <Title>Exercícios para Estudo</Title>
            <VideoSection>
            <Video src="https://www.youtube.com/embed/OiaRheiuDKQ?si=1YqbpAIMWSJTz24U" />
            </VideoSection>
            <VideoLine/>
            <VideoSection>
            <Video src="https://www.youtube.com/embed/uendv1Khpcw?si=IVSsatIXZm3iHjtI" />
            </VideoSection>
            <VideoLine/>
            <VideoSection>
            <Video src="https://www.youtube.com/embed/ns9J05vBYQA?si=tpGFNpQDRvYAUUtS" />
            </VideoSection>
        </Section>
    )
}

export default PageExercicios;