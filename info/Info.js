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
          <Text>
            Quis Lorem sit culpa velit dolore commodo amet
            enim do laborum
            fugiat qui sunt aute. Duis dolore aute magna enim.
            Laboris velit ex anim dolore enim ea anim do aute non.
            Excepteur ea laborum ex amet amet cupidatat. Non laborum aliqua
            labore incididunt nostrud elit consequat. Sint id eiusmod magna
          </Text>
        </TextArea>
        <ImgArea>
          <Img src={imgPath} alt={alt} />
        </ImgArea>
      </Container>
    </>
  )
}
const WorkArea = styled.div`
  display: flex;
  text-align:center;
  justify-content:center;
  flex-direction:column;
  padding:0 1rem;
`

export default Info

const Container = styled.div`
  display:grid;
  grid-template-columns:1fr;
  grid-template-rows:1fr 1fr 2fr;
  justify-content:center;
  background:#010606;
  color:white;
`

const TitleArea = styled.div`
  display: flex;
  width:auto;
  justify-content:center;
  align-items:center;
  text-align:center;
  background:red;
  `;
const Title = styled.h3`
`;


const ImgArea = styled.div`
  display:flex;
  justify-content:center;
  padding:2rem;
`;
const Img = styled.img`
  max-width: 100%;
  height: auto;
`;


const TextArea = styled.div`
  display: flex;
  text-align:center;
  justify-content:center;
  flex-direction:column;
`;
const Text = styled.article`
  display:flex;
  height:100%;
  background-color:red;
  word-wrap: break-word
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





/* import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { device } from './sizes';

const Works = ({
  english = true,
  projectName = 'poietic',
  description = 'Sunt id sint nulla consequat adipisicing ullamco esse qui sint ullamco consectetur. Duis esse non fugiat adipisicing occaecat. Culpa eiusmod eu veniam anim mollit eiusmod reprehenderit commodo irure aliquip mollit.Cillum commodo voluptate cillum consectetur laboris. Irure laboris eiusmod laboris ea exercitation adipisicing laborum ad. Laborum tempor excepteur laborum commodo consequat duis consequat eu eiusmod sunt reprehenderit occaecat enim ipsum. Enim cillum duis dolore culpa quis eu nisi non deserunt enim adipisicing.',
  imgURL = './ClientSide.svg',
  pageURL = '/some/url',
  githubURL = '/some/url',
  imgStart = false }) => {
  return (
    <>
      <GlobalStyles />
      <WorksContainer imgStart={imgStart}>
        <WorkArea>
          <ProjectName>{projectName}</ProjectName>
          <Description>
            {description}
          </Description>
        </WorkArea>
        <ImgArea>
          <Img src={imgURL} alt={projectName} />
        </ImgArea>
        <BtnsArea>
          <Button
            href={pageURL}
            big={false}
          > {english ? 'Go to the Page' : 'Ir a la Página'}
          </Button>
          <Button
            href={githubURL}
            big={false}
          > {english ? 'Go to the Code' : 'Ir al Código'}
          </Button>
        </BtnsArea>
      </WorksContainer>
    </>
  )
}

export default Works


const BtnsArea = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:0 2rem;
  @media ${device.tablet}{
    flex-direction:row;
  }
  @media ${device.laptop} {
    grid-area:buttons;
  }
`

const ImgArea = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  @media ${device.laptop} {
    grid-area:col2;
  }

  `

const WorkArea = styled.div`
  display: flex;
  text-align:center;
  justify-content:center;
  flex-direction:column;
  padding:0 1rem;
  @media ${device.tablet}{
    padding:2rem;
  }
  @media ${device.laptop} {
    grid-area:col1;
  }
`

const Img = styled.img`
  border-radius:5px;
  width: 80%;
  height:auto;
`;


const ProjectName = styled.h3`
  height: fit-content;
  padding:1rem;
  `

const Description = styled.article`
  display:flex;
  height: fit-content;
`

const Button = styled.a`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#01BF71' : '#010606')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: solid;
  border-color:#01BF71;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2 ease-in-out;
  text-decoration: none;
  margin:1rem;
  &:hover {
    transition: all 0.2 ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#01BF71')};
  };
`

const WorksContainer = styled.div`
  color: #f7f8fa;
  background: #010606;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 1fr 1fr;
  font-family:'Didact Gothic', sans-serif;
  justify-content: center;
  @media ${device.mobileS} {
    grid-template-rows: repeat(3,1fr);
  }
  @media ${device.mobileM} {
    justify-content:center;
    grid-template-rows: repeat(3, 2fr);
  }
  @media ${device.mobileL} {
    padding:0 2rem;
  }
  @media ${device.tablet}{
    font-size:25px;
    grid-template-rows: repeat(2, 2fr) 1fr;
  }
  @media ${device.laptop} {
    grid-template-columns:repeat(2, 1fr);
    grid-template-rows:2fr 1fr;
    grid-template-areas: ${({ imgStart }) => (imgStart ? "'col2 col1' 'buttons buttons'" : "'col1 col2' 'buttons buttons'")}
  }
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
` */

