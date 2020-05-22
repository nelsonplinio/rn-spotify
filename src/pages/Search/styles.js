import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#1f1d1e', '#212021', '#252425', '#282828'],
})`
  flex: 1;
`;

export const Inner = styled.View`
  align-items: center;
  flex: 1;
  padding: 0 16px;
`;

export const Title = styled.Text`
  font-size: 50px;
  color: #fff;
  font-weight: bold;
  margin: 16% 0 16px;
  align-self: stretch;
  text-align: center;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 8px;
  width: 100%;
  height: 50px;
`;

export const SearchTextInput = styled.Text`
  /* font-weight: bold; */
  color: #555;
  font-size: 18px;
  margin-left: 8px;
`;

export const SectionContainer = styled.View`
  width: 100%;
`;

export const SectionTitle = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  margin: 16px 0;
`;

export const CardsContainer = styled.View`
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
