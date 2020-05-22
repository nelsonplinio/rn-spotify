import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
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

  const [played, setPlayed] = useState(false);
  const [isFavority, setIsFavority] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Player')}>
      <Container>
        <MusicInfoContainer>
          <MusicImage
            source={{
              uri:
                'https://lh3.googleusercontent.com/YebIcJ0tYMOBSbUOJH77FhHHDnaRsrfKqrDjBe1pAZK4b8RG6w0rVrQOPqWl48_KHK_T9VTHny3I7Uiu7A=w544-h544-l90-rj',
            }}
          />

          <MusicName numberOfLines={1}>Trafico de drogas</MusicName>

          <Entypo name="dot-single" size={16} color="rgba(255, 255, 255,0.8)" />

          <MusicOwner numberOfLines={1}>Um cara ai</MusicOwner>
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
            <Icon
              name={played ? 'pause' : 'play'}
              size={25}
              color="rgba(255, 255, 255, 0.7)"
            />
          </PlayButton>
        </MusicActionsContainer>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default PlayerBar;
