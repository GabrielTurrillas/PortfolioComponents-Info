import React from 'react'
import styled, { createGlobalStyle } from 'styled-components';
import { device } from './sizes';

const Info = ({ english, imgPath, alt, title, text, engText }) => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <TitleArea>
          <Title>{title}</Title>
        </TitleArea>
        <TextArea>
          <Text>
            {english ? engText : text}
          </Text>
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
  grid-template-rows:1fr 2fr 2fr;
  grid-template-areas:'TitleArea'
  'TextArea'
  'ImgArea';
  justify-content:center;
  background:#010606;
  color:white;
  padding:0 1rem;
  @media ${device.mobileS}{
    grid-template-rows:1fr 2fr 3fr;
    padding:0 2rem;
  }
  @media ${device.mobileL}{
    grid-template-rows:1fr 2fr 3fr;
  }
  @media ${device.tablet}{
    padding:0 5rem;
  }
  @media ${device.laptop}{
    grid-template-areas:'TitleArea TitleArea'
                        'TextArea ImgArea';
    grid-template-rows: 1fr 3fr;
  }
  @media ${device.laptopL}{
    padding:0 21rem;
  }
`

const TitleArea = styled.div`
  display: flex;
  width:auto;
  justify-content:center;
  align-items:center;
  text-align:center;
  grid-area:TitleArea;
  @media ${device.mobileL}{
    font-size:5rem;
    align-items:end;
  }
  @media ${device.mobileL}{
    align-items:end;
  }
`;
const Title = styled.h3`
  font-size:3rem;
  @media ${device.mobileL}{
    font-size:5rem;
  }
`;


const TextArea = styled.div`
  display: flex;
  text-align:center;
  justify-content:center;
  flex-direction:column;
  font-size:18px;
  grid-area:TextArea;
`;
const Text = styled.article`
  display:flex;
  height:100%;
  word-wrap: break-word;
  @media ${device.mobileL}{
    align-items:center;
    font-size:22px; 
  }
  @media ${device.tablet}{
  }
  `;


const ImgArea = styled.div`
  display:flex;
  justify-content:center;
  grid-area:ImgArea;
  @media ${device.mobileM}{
    padding:2rem;
  }
`;
const Img = styled.img`
  max-width: 100%;
  height: auto;
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