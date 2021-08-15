import React from 'react'
import styled, { createGlobalStyle } from 'styled-components';

const Info = ({ imgPath, alt }) => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <TitleArea>
          <Title>Title</Title>
        </TitleArea>
        <TextArea>
          Quis Lorem sit culpa velit dolore commodo amet enim do laborum fugiat qui sunt aute. Duis dolore aute magna enim. Laboris velit ex anim dolore enim ea anim do aute non.
          Excepteur ea laborum ex amet amet cupidatat. Non laborum aliqua labore incididunt nostrud elit consequat. Sint id eiusmod magna ea ad consequat mollit cupidatat. Adipisicing incididunt ad in ex labore et dolore.
        </TextArea>
        <ImgArea>
          <Img src={imgPath} alt={alt} />
        </ImgArea>
      </Container>
    </>
  )
}

export default Info

const Container = styled.div`
  display:grid;
  grid-template-columns:1fr;
  grid-template-areas:'TitleArea'
                      'TextArea'
                      'ImgArea';
  background:#010606;
  color:white;
`

const ImgArea = styled.div`
  grid-area: ImgArea;
`
const Img = styled.img`
  
`

const Title = styled.h3`

`;

const TitleArea = styled.div`
  grid-area:TitleArea;
`;

const TextArea = styled.article`
  grid-area: TextArea;
`;


const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
} 
#root {
  margin:0 auto;
}
`

