import React, { useState, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';
import {
  Container,
  TopBar,
  BackButton,
  MoreButton,
  MusicImage,
  BottomContainer,
  MusicContainer,
  MusicInfo,
  MusicName,
  MusicOwner,
  MusicSliderContainer,
  MusicSlider,
  MusicTimeContainer,
  MusicProgress,
  MusicSize,
  MusicControlContainer,
  PlayerButton,
  ActionsContainer,
} from './styles';

const Player = () => {
  const navigation = useNavigation();

  const [played, setPlayed] = useState(true);
  const [isFavority, setIsFavority] = useState(true);

  const [progress, setProgress] = useState(0);

  const progressFormatted = useMemo(
    () => progress.toFixed(2).replace('.', ':'),
    [progress],
  );

  const duration = useMemo(() => 15, []);
  const durationFormatted = useMemo(
    () => duration.toFixed(2).replace('.', ':'),
    [duration],
  );
  return (
    <Container>
      <TopBar>
        <BackButton onPress={navigation.goBack}>
          <Icon name="chevron-down" color="#fff" size={28} />
        </BackButton>
        <MoreButton>
          <Icon name="more-vertical" color="#fff" size={28} />
        </MoreButton>
      </TopBar>

      <MusicImage
        resizeMethod="resize"
        source={{
          uri:
            'https://lh3.googleusercontent.com/FSZk8Vp72dpbubbJ1vCZKaIN-SedgBRjxFt-qNxk0n72QfUdNL6eiVvt-ixFaWrs1HriSC0Zpu5j4X8=w544-h544-l90-rj',
        }}
      />

      <BottomContainer>
        <MusicContainer>
          <MusicInfo>
            <MusicName>Vida Loka, Pt. 1</MusicName>
            <MusicOwner>Racionais Mc's</MusicOwner>
          </MusicInfo>
          <MusicSliderContainer>
            <MusicSlider
              thumbTintColor="#fff"
              minimumTrackTintColor="#fff"
              maximumTrackTintColor="#fff"
              maximumValue={duration}
              minimumValue={0}
              hitSlop={{ left: 0, right: 0 }}
              onValueChange={setProgress}
            />

            <MusicTimeContainer>
              <MusicProgress>{progressFormatted}</MusicProgress>

              <MusicSize>{durationFormatted}</MusicSize>
            </MusicTimeContainer>
          </MusicSliderContainer>

          <MusicControlContainer>
            <TouchableOpacity onPress={() => setIsFavority(!isFavority)}>
              <FontAwesome
                name={isFavority ? 'heart' : 'heart-o'}
                size={24}
                color={isFavority ? '#1DB954' : 'rgba(255, 255, 255, 0.7)'}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Entypo name="controller-jump-to-start" size={32} color="#fff" />
            </TouchableOpacity>

            <PlayerButton played={played} onPress={() => setPlayed(!played)}>
              <Foundation
                name={played ? 'pause' : 'play'}
                size={46}
                color="#000"
              />
            </PlayerButton>

            <TouchableOpacity>
              <Entypo name="controller-next" size={32} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity>
              <MaterialCommunityIcons
                name="dots-horizontal-circle-outline"
                size={28}
                color="rgba(255, 255, 255, 0.4)"
              />
            </TouchableOpacity>
          </MusicControlContainer>
        </MusicContainer>
        <ActionsContainer>
          <TouchableOpacity>
            <MaterialIcons
              name="devices"
              size={20}
              color="rgba(255, 255, 255, 0.4)"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons
              name="playlist-play"
              size={20}
              color="rgba(255, 255, 255, 0.6)"
            />
          </TouchableOpacity>
        </ActionsContainer>
      </BottomContainer>
    </Container>
  );
};

export default Player;
