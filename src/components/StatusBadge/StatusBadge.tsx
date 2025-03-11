import {Container, InfoText} from './styles';

interface StatusBadgeProps {
  status: 'concluído' | 'pendente';
  text?: string;
}

export const StatusBadge = ({status = 'pendente'}: StatusBadgeProps) => {
  return (
    <Container status={status}>
      <InfoText>{status}</InfoText>
    </Container>
  );
};
