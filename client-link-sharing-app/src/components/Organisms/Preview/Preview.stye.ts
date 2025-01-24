import { styled } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 0.1fr 1fr;
  gap: 3rem;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    gap: 10rem;
  }
`;

export const BackgroundDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 35%;
  background-color: ${props => props.theme.palette.primary.purple};
  z-index: 0;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  z-index: 1;
  background-color: ${props => props.theme.palette.neutral.white};
  padding: 1rem;
  border-radius: 10px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 50%;
    max-width: 600px;
    background-color: white;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    padding: 20px;
    z-index: 1;
  }
`;
