import styled from 'styled-components/native';
import Theme from '@/theme';

export const Container = styled.View`
  height: 100%;
  padding: 0 20px;
  background-color: ${Theme.colors.background};
`;

export const EmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  padding: 20px;
  background-color: ${Theme.colors.blue_10};
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;

export const InfoText = styled.Text`
  font-size: 16px;
  color: ${Theme.colors.gray_20};
  margin-top: 20px;
`;
