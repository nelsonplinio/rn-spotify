import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 160px;
  margin-right: 8px;
  margin-left: 8px;
  overflow: hidden;
`;

export const Image = styled.Image`
  height: 160px;
  width: 100%;
  border-radius: 8px;
`;

export const InfoContainer = styled.View`
  margin-top: 8px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: 500;
`;

export const Owner = styled.Text`
  font-size: 18px;
  color: #f1f1f1;
  font-weight: 500;
`;
