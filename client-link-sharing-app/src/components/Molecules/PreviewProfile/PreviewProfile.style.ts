import { styled } from 'styled-components';

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 1rem;
`;

export const ImageContainer = styled.div`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  background-color: ${props => props.theme.palette.primary.veryVeryLightGrey};
`;

export const StyledImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
`;

export const NamePlaceholder = styled.div`
  background-color: grey;
  color: transparent;
  height: 1em;
  width: 60%;
  background-color: ${props => props.theme.palette.primary.veryVeryLightGrey};
  border-radius: 10px;
`;

export const EmailPlaceholder = styled.div`
  background-color: grey;
  color: transparent;
  height: 0.5em;
  width: 40%;
  background-color: ${props => props.theme.palette.primary.veryVeryLightGrey};
  border-radius: 10px;
`;
