import styled from 'styled-components/native';

export const Container = styled.View`
  height: 60px;
  width: 100%;
  position: absolute;
  background: #282828;
  bottom: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MusicImage = styled.Image`
  height: 60px;
  width: 60px;
  margin-left: -7px;
  margin-right: 16px;
`;

export const MusicInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
  padding: 0 8px;
`;

export const MusicName = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  flex: 1;
`;

export const MusicOwner = styled.Text`
  font-size: 16px !important;
  color: #fff;
  opacity: 0.4 !important;
`;

export const MusicActionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const FavorityButton = styled.TouchableOpacity`
  margin-right: 16px;
`;

export const PlayButton = styled.TouchableOpacity`
  margin-right: 16px;
  width: 26px;
`;
