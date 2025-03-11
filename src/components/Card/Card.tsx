import styles, {Container} from './styles';

interface CardProps {
  children: React.ReactNode;
}

export const Card = ({children}: CardProps) => {
  return <Container style={styles.containerShadow}>{children}</Container>;
};
