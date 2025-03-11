import styled from 'styled-components/native';
import Theme from '../../theme';

export const Container = styled.View`
  flex-direction: row;
  gap: 10px;
`;

export const CheckWrapper = styled.View`
  padding-block: 3px;
`;

export const ContentWrapper = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: ${Theme.colors.gray_20};
`;

export const Description = styled.Text`
  color: ${Theme.colors.gray_30};
`;

export const Divider = styled.View`
  height: 1px;
  background-color: ${Theme.colors.gray_50};
  opacity: 0.2;
  width: 100%;
  margin: 10px 0;
`;
