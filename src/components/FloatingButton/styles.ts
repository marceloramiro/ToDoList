import styled from 'styled-components/native';
import Theme from '../../theme';

interface ButtonProps {
  color?: keyof typeof Theme.colors;
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${({color}: ButtonProps) =>
    Theme.colors[color || 'blue_10']};
  align-items: center;
  justify-content: center;
`;
