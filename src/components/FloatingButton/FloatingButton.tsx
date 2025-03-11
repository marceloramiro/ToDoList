import Theme from '@/theme';
import {Button} from './styles';

interface FloatingButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  color?: keyof typeof Theme.colors;
}

export const FloatingButton = ({
  children,
  onPress,
  color,
}: FloatingButtonProps) => {
  return (
    <Button color={color} onPress={onPress}>
      {children}
    </Button>
  );
};
