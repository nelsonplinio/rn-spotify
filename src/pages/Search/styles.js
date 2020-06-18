import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #212021;
`;

export const Inner = styled.View`
  align-items: center;
  flex: 1;
  margin-top: 120px;
  padding: 10px 16px 0;
  background: #212021;
`;

export const Title = styled(Animated.Text)`
  font-size: 50px;
  color: #fff;
  width: 100%;
  font-weight: bold;
  margin: 18% 0;
  align-self: stretch;
  text-align: center;
  position: absolute;
`;

export const SearchContainer = styled(Animated.View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 8px;
  width: 95%;
  height: 50px;
  z-index: 10;
  align-self: center;
  border: solid 2px #eee;
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
