import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${({ color }) => color};
  width: 48%;
  height: 130px;
  margin: 8px 0;
  padding: 12px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
`;

export const Title = styled.Text`
  font-size: 17px;
  color: #fff;
  font-weight: bold;
`;

export const Image = styled.Image`
  width: 70px;
  height: 70px;
  position: absolute;
  bottom: -7px;
  right: -12px;
  transform: rotate(25deg);
  border-radius: 8px;
`;
