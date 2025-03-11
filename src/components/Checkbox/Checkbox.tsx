import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Theme from '../../theme';

interface CheckboxProps {
  onCheck?: (isChecked: boolean) => void;
  isChecked?: boolean;
}

export const Checkbox = ({onCheck, isChecked}: CheckboxProps) => {
  return (
    <BouncyCheckbox
      onPress={onCheck}
      fillColor={Theme.colors.blue_10}
      isChecked={isChecked}
      hitSlop={{top: 30, bottom: 30, left: 30, right: 30}}
    />
  );
};
