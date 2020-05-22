import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#7159c1', '#783b81', '#62294d', '#3f1e29', '#191414'],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 0 },
})`
  flex: 1;
`;

export const Inner = styled.View`
  flex: 1;
`;
export const Header = styled.View`
  width: 100%;
  height: 40px;
  padding: 0 8px;
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
