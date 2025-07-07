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

const PageVideoAula = () => {
    return (
        <Section>
            <Title>Video Aulas para Estudo</Title>
            <VideoSection>
            <Video src="https://www.youtube.com/embed/_wJUzN8MoMg?si=aA2xQfSFIYbIhhOj" />
            </VideoSection>
            <VideoLine/>
            <VideoSection>
            <Video src="https://www.youtube.com/embed/YLkZS-U7WTs?si=WnLS5ZLGNHrRKchM" />
            </VideoSection>
            <VideoLine/>
            <VideoSection>
            <Video src="https://www.youtube.com/embed/PpUDPQ6txm0?si=p2NCkKkSU4707Vlj" />
            </VideoSection>
            <VideoLine/>
            <VideoSection>
            <Video src="https://www.youtube.com/embed/roYKo0bk7fQ?si=-Se4FRY5UAKaibVW" />
            </VideoSection>
            
        </Section>
    )
}

export default PageVideoAula;