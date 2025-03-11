import styled from 'styled-components/native';
import Theme from '../../theme';

interface StatusBadgeProps {
  status: 'concluído' | 'pendente';
}

export const Container = styled.View<StatusBadgeProps>`
  padding: 2px 5px;
  border-radius: 15px;
  background-color: ${({status}: StatusBadgeProps) =>
    status === 'concluído' ? Theme.colors.green_10 : Theme.colors.orange_10};
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  margin-bottom: 5px;
`;
export const InfoText = styled.Text`
  color: ${Theme.colors.gray_90};
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
`;
