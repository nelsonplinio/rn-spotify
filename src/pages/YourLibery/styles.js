import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#1f1d1e', '#212021', '#252425', '#282828'],
})`
  flex: 1;
`;
