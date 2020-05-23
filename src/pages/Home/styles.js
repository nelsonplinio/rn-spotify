import styled from 'styled-components/native';
import { FlatList, Animated } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled.View`
  flex: 1;
  background: #282828;
`;

export const Inner = styled.View`
  flex: 1;
  margin-top: 60px;
  background: #282828;
`;
export const Header = styled(Animated.View)`
  width: 100%;
  height: 60px;
  padding: 0 8px;
  position: absolute;
  padding: 8px;
  justify-content: center;
  top: ${getStatusBarHeight()}px;
`;

export const HeaderButton = styled.TouchableOpacity`
  align-self: flex-end;
`;

export const SectionAlbunsContainer = styled.View`
  width: 100%;

  margin-bottom: 22px;
`;

export const SectionAlbunsTitle = styled.Text`
  font-size: 26px;
  color: #fff;
  font-weight: bold;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 16px;
`;

export const SectionAlbunsList = styled(FlatList)``;
