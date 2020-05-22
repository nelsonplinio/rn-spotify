import React from 'react';

import { Container, Title, Image } from './styles';

const SearchAlbumCard = ({ album }) => {
  return (
    <Container key={`${album.id}`} color={album.color}>
      <Title numberOfLines={2}>{album.title}</Title>
      <Image source={{ uri: album.image }} />
    </Container>
  );
};

export default SearchAlbumCard;
