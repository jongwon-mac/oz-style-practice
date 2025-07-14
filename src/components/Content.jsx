import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

const ContentImage = styled.img`
  width: 300px;
  border-radius: 10px;
  margin-bottom: 3px;
  min-height: 225px;
`;

const StatusSpan = styled.span`
  font-size: 12px;
  color: #d7fa00;
  border: 1px solid #d7fa00;
  padding: 4px 5px;
  border-radius: 3px;
`;

const TitleDiv = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const SubtitleP = styled.p`
  font-size: 12px;
  color: rgb(160, 160, 160);
`;

export default function Content({ content }) {
  return (
    <ContentContainer className="content-container">
      <ContentImage src={content.img} alt={content.title} />
      <StatusSpan>모집중</StatusSpan>
      <TitleDiv>{content.title}</TitleDiv>
      <SubtitleP>{content.subtitle}</SubtitleP>
    </ContentContainer>
  );
}
