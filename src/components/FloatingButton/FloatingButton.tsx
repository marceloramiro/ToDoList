import {Animated} from 'react-native';
import {useEffect, useMemo} from 'react';
import Theme from '@/theme';
import {Button} from './styles';
interface FloatingButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  color?: keyof typeof Theme.colors;
  show?: boolean;
}

export const FloatingButton = ({
  children,
  onPress,
  color,
  show = false,
}: FloatingButtonProps) => {
  const translateAnim = useMemo(() => new Animated.Value(100), []);

  useEffect(() => {
    Animated.timing(translateAnim, {
      toValue: show ? 20 : 100,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [show, translateAnim]);

  return (
    <Animated.View
      style={{
        transform: [{translateX: translateAnim}],
      }}>
      <Button color={color} onPress={onPress}>
        {children}
      </Button>
    </Animated.View>
  );
};
