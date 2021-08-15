import React, { useContext } from 'react';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrap,
  Img
} from './InfoElements';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data';
import TechnologyTitle from '../TechnologyTitle';
import TechnologyList from '../TechnologyList';
import { LenguajeContext } from '../Context/LenguajeContext'

const Technologies = () => {
  const [english] = useContext(LenguajeContext)
  return (
    <>
      <InfoContainer lightBg={homeObjOne.lightBg} id='technologies'>
        <TechnologyTitle />
        <InfoWrapper>
          <InfoRow imgStart={homeObjOne.imgStart}>
            <Column1>
              <TextWrapper>
                <Heading lightText={homeObjOne.lightText}>{english ? homeObjOne.headline : 'Programación del lado del Servidor'}</Heading>
                <Subtitle darkText={homeObjOne.darkText}>{english ? homeObjOne.description : 'Me encanta trabajar creando API REST en Django. Modelar bases de datos en UML para luego verlas funcionando en el mundo real es algo emocionante. Uso Django REST framework para este propósito.'}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={homeObjOne.img} alt={homeObjOne.alt} imgRight={homeObjOne.imgRight} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>

        <InfoWrapper>
          <InfoRow imgStart={homeObjTwo.imgStart}>
            <Column1>
              <TextWrapper>
                <Heading lightText={homeObjTwo.lightText}>{english ? homeObjTwo.headline : 'Programación del lado del Cliente'}</Heading>
                <Subtitle darkText={homeObjTwo.darkText}>{english ? homeObjTwo.description : 'Hoy en día la gente busca gratificación instantánea por lo que la velocidad de las aplicaciones es esencial para la retención de usuarios. Para conseguir esto uso React en conjunto con Redux para generar esa sensación de instantaneidad.'}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={homeObjTwo.img} alt={homeObjTwo.alt} imgRight={homeObjTwo.imgRight} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>

        <InfoWrapper>
          <InfoRow imgStart={homeObjThree.imgStart}>
            <Column1>
              <TextWrapper>
                <Heading lightText={homeObjThree.lightText}>{english ? homeObjThree.headline : 'Despliegue'}</Heading>
                <Subtitle darkText={homeObjThree.darkText}>{english ? homeObjThree.description : "Desplegar una API REST en el Internet es desafiante, pero poseer esta habilidad da al desarrollador real independencia. Para este propósito uso Servidores Linux montados en instancias EC2  de Amazon Web Services. Además ocupo el servidor web Nginx y Let's Encrypt para generar certificados SSL."}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={homeObjThree.img} alt={homeObjThree.alt} imgRight={homeObjThree.imgRight} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
        <TechnologyList />
      </InfoContainer>
    </>
  )
}

export default Technologies

import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#010606' : '#010606')};

  @media screen and (max-width: 768px) {
    padding: px 0;
  }
`;

export const InfoWrapper = styled.div`
  height: max-content;
  display: grid;
  width: 100%;
  max-width: 1500px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
  
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
  @media screen and (max-width: 480px) {
    grid-template-areas: 'col2' 'col1';
    text-align: center;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  display:flex;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`

  max-width: 540px;
  padding-top: 0;
`;


export const Heading = styled.h1`
  margin-bottom: 26px;
  font-family:'Didact Gothic', sans-serif;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #f7f8fa/* ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')} */;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 500px;
  margin-bottom: 35px;
  font-size: 22px;
  line-height: 30px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#f7f8fa')};
`;

export const ImgWrap = styled.div`
  max-width: 400px;
  height: 100%;
  `;

export const Img = styled.img`
  position:${({ imgRight }) => (imgRight ? 'relative' : 'static')};
  left: ${({ imgRight }) => (imgRight ? '120px' : '0')};
  width:100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  @media screen and (max-width: 768px) {
    left: 0;
  }
  @media screen and (max-width: 480px){
    position: static;
  }
  `;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
  `;