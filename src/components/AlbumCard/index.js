import React from 'react';
import { Container, Image, InfoContainer, Title, Owner } from './styles';

const AlbumCard = ({ data }) => {
  return (
    <Container>
      <Image source={{ uri: data.image }} />
      <InfoContainer>
        <Title>{data.title}</Title>
        <Owner>{data.owner}</Owner>
      </InfoContainer>
    </Container>
  );
};

export default AlbumCard;
