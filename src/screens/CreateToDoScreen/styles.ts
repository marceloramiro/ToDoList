import styled from 'styled-components/native';
import Theme from '../../theme';

interface ButtonProps {
  disabled?: boolean;
}

export const Container = styled.View`
  height: 100%;
  padding: 20px;
  background-color: ${Theme.colors.background};
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${Theme.colors.gray_20};
  margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  background-color: ${Theme.colors.blue_10};
  opacity: ${({disabled}: ButtonProps) => (disabled ? 0.5 : 1)};
  padding: 10px 20px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const TextButton = styled.Text`
  color: ${Theme.colors.gray_90};
  font-weight: bold;
`;

export const ContentWrapper = styled.View`
  gap: 10px;
`;
