import React, { useMemo } from 'react';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import PlayerBar from '../../components/PlayerBar';
import { sections } from '../../services/data';
import SearchAlbumCard from '../../components/SearchAlbumCard';

import {
  Container,
  Inner,
  Title,
  SearchContainer,
  SearchTextInput,
  SectionContainer,
  SectionTitle,
  CardsContainer,
} from './styles';

const Search = () => {
  const statusBarHeight = useMemo(getStatusBarHeight, []);

  return (
    <Container>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: statusBarHeight,
          paddingBottom: 50,
        }}
      >
        <Inner>
          <Title>Busca</Title>
          <SearchContainer>
            <Icon name="search" size={24} color="#777" />
            <SearchTextInput>Artistas, Sons, ou podcasts</SearchTextInput>
          </SearchContainer>

          {sections.map((section) => (
            <SectionContainer key={`${section.id}`}>
              <SectionTitle>{section.title}</SectionTitle>

              <CardsContainer>
                {section.albums.map((album) => (
                  <SearchAlbumCard key={`${album.id}`} album={album} />
                ))}
              </CardsContainer>
            </SectionContainer>
          ))}
        </Inner>
      </ScrollView>
      <PlayerBar />
    </Container>
  );
};

export default Search;
