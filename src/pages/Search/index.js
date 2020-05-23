import React, { useMemo, useState } from 'react';
import { Animated } from 'react-native';
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
  const [scrollOffset] = useState(new Animated.Value(0));
  const statusBarHeight = useMemo(getStatusBarHeight, []);

  return (
    <Container>
      <Title
        style={{
          transform: [
            {
              scale: scrollOffset.interpolate({
                inputRange: [10, 100],
                outputRange: [1, 0.85],
              }),
            },
          ],
          opacity: scrollOffset.interpolate({
            inputRange: [0, 30],
            outputRange: [1, 0.8],
          }),
        }}
      >
        Busca
      </Title>
      <Animated.ScrollView
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollOffset,
                },
              },
            },
          ],
          { useNativeDriver: true },
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: statusBarHeight,
          paddingBottom: 72,
        }}
      >
        <Inner>
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
      </Animated.ScrollView>
      <PlayerBar />
    </Container>
  );
};

export default Search;
