import styled from 'styled-components/native';
import Theme from '@/theme';

interface InputTextProps {
  height?: number;
}

export const Container = styled.View``;

export const Label = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
  font-weight: 500;
  color: ${Theme.colors.gray_20};
`;

export const Input = styled.TextInput<InputTextProps>`
  height: ${({height}: InputTextProps) => height || 50}px;
  border-color: ${Theme.colors.gray_60};
  color: ${Theme.colors.gray_30};
  border-width: 2px;
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 5px;
`;

export const ErrorLabel = styled.Text`
  font-size: 12px;
  color: ${Theme.colors.red_10};
  margin-bottom: 10px;
`;
