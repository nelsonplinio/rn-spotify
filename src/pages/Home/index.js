import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Animated } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { sections } from '../../services/data';

import AlbumCard from '../../components/AlbumCard';
import PlayerBar from '../../components/PlayerBar';
import {
  Container,
  Inner,
  Header,
  HeaderButton,
  SectionAlbunsContainer,
  SectionAlbunsTitle,
  SectionAlbunsList,
} from './styles';

const Home = () => {
  const [scrollOffset] = useState(new Animated.Value(0));

  return (
    <Container>
      <Header
        style={{
          opacity: scrollOffset.interpolate({
            inputRange: [0, 30],
            outputRange: [1, 0],
          }),
        }}
      >
        <HeaderButton>
          <Icon name="settings" size={26} color="#fff" />
        </HeaderButton>
      </Header>
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
        contentContainerStyle={{
          paddingTop: getStatusBarHeight() + 16,
          paddingBottom: 50,
        }}
      >
        <Inner>
          {sections.map((section) => (
            <SectionAlbunsContainer key={`${section.id}`}>
              <SectionAlbunsTitle>{section.title}</SectionAlbunsTitle>
              <SectionAlbunsList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={section.albums}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({ item }) => <AlbumCard data={item} />}
              />
            </SectionAlbunsContainer>
          ))}
        </Inner>
      </Animated.ScrollView>
      <PlayerBar />
    </Container>
  );
};

export default Home;
