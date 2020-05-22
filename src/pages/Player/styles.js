import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const statusBarHeight = getStatusBarHeight();

export const Container = styled(LinearGradient).attrs({
  colors: [
    '#464646',
    '#3d3c3d',
    '#343334',
    '#2b292a',
    '#232021',
    '#211e1f',
    '#1e1b1c',
    '#1c191a',
    '#1f1d1e',
    '#212021',
    '#252425',
    '#282828',
  ],
})`
  flex: 1;
  justify-content: space-between;
  padding: ${statusBarHeight + 16}px 6% 16px;
`;

export const TopBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled.TouchableOpacity``;

export const MoreButton = styled.TouchableOpacity``;

export const MusicImage = styled.Image`
  height: 45%;
  border-radius: 2px;
`;

export const BottomContainer = styled.View``;

export const MusicContainer = styled.View``;

export const MusicInfo = styled.View`
  margin-bottom: 8px;
`;

export const MusicName = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;

export const MusicOwner = styled.Text`
  font-size: 14px;
  color: #fff;
  opacity: 0.8;
`;

export const MusicSliderContainer = styled.View`
  margin: 0 -16px;
`;

export const MusicSlider = styled.Slider`
  width: 100%;
  margin: auto;
`;

export const MusicTimeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MusicProgress = styled.Text`
  color: #fff;
  opacity: 0.8;
  font-size: 12px;
  margin-left: 16px;
`;

export const MusicSize = styled(MusicProgress)`
  margin-right: 16px;
`;

export const MusicControlContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0 10%;
`;

export const PlayerButton = styled.TouchableOpacity`
  height: 60px;
  width: 60px;
  padding-left: ${({ played }) => (played ? 0 : 6)}px;
  background: #fff;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const ActionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
