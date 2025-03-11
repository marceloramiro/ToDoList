import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Theme from '../../theme';

interface CheckboxProps {
  onCheck?: (isChecked: boolean) => void;
}

export const Checkbox = ({onCheck}: CheckboxProps) => {
  return <BouncyCheckbox onPress={onCheck} fillColor={Theme.colors.blue_10} />;
};
