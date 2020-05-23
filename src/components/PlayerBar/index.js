import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import {
  Container,
  MusicInfoContainer,
  MusicImage,
  MusicName,
  MusicOwner,
  MusicActionsContainer,
  FavorityButton,
  PlayButton,
} from './styles';

const PlayerBar = () => {
  const navigation = useNavigation();

  const [played, setPlayed] = useState(true);
  const [isFavority, setIsFavority] = useState(true);
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Player')}>
      <Container>
        <MusicInfoContainer>
          <MusicImage
            source={{
              uri:
                'https://lh3.googleusercontent.com/FSZk8Vp72dpbubbJ1vCZKaIN-SedgBRjxFt-qNxk0n72QfUdNL6eiVvt-ixFaWrs1HriSC0Zpu5j4X8=w544-h544-l90-rj',
            }}
          />

          <MusicName numberOfLines={1}>
            Vida Loka, Pt. 1
            <Entypo
              name="dot-single"
              size={14}
              style={{ marginTop: 4 }}
              color="rgba(255, 255, 255,0.6)"
            />
            <MusicOwner numberOfLines={1}>Racionais Mc's</MusicOwner>
          </MusicName>
        </MusicInfoContainer>

        <MusicActionsContainer>
          <FavorityButton onPress={() => setIsFavority(!isFavority)}>
            <Icon
              name={isFavority ? 'heart' : 'heart-o'}
              size={25}
              color={isFavority ? '#1DB954' : 'rgba(255, 255, 255, 0.7)'}
            />
          </FavorityButton>

          <PlayButton onPress={() => setPlayed(!played)}>
            <Foundation
              name={played ? 'pause' : 'play'}
              size={34}
              color="rgba(255, 255, 255, 0.7)"
            />
          </PlayButton>
        </MusicActionsContainer>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default PlayerBar;
