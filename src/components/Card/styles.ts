import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 15px;
  border-radius: 10px;
  margin: 5px;
  background-color: #fff;
`;

const styles = StyleSheet.create({
  containerShadow: {
    boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.1)',
  },
});

export default styles;
