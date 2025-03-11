import {TextInputProps} from 'react-native';
import Theme from '../../theme';
import {Input, Label, Container} from './styles';

interface InputTextProps extends TextInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText: (text: string) => void;
  height?: number;
}

export const InputText = ({
  label,
  placeholder = 'Digite aqui...',
  value,
  onChangeText,
  height,
  ...rest
}: InputTextProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input
        value={value}
        placeholder={placeholder}
        placeholderTextColor={Theme.colors.gray_60}
        onChangeText={onChangeText}
        height={height}
        {...rest}
      />
    </Container>
  );
};
