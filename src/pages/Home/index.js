import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native';
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
  return (
    <Container>
      <ScrollView
        contentContainerStyle={{
          paddingTop: getStatusBarHeight() + 16,
          paddingBottom: 50,
        }}
      >
        <Inner>
          <Header>
            <HeaderButton>
              <Icon name="settings" size={26} color="#fff" />
            </HeaderButton>
          </Header>
          {sections.map((section) => (
            <SectionAlbunsContainer key={section.id}>
              <SectionAlbunsTitle>{section.title}</SectionAlbunsTitle>
              <SectionAlbunsList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={section.albums}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <AlbumCard data={item} />}
              />
            </SectionAlbunsContainer>
          ))}
        </Inner>
      </ScrollView>
      <PlayerBar />
    </Container>
  );
};

export default Home;
