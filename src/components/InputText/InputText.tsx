import {TextInputProps} from 'react-native';
import Theme from '../../theme';
import {Input, Label, Container, ErrorLabel} from './styles';

interface InputTextProps extends TextInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText: (text: string) => void;
  height?: number;
  error?: string;
}

export const InputText = ({
  label,
  placeholder = 'Digite aqui...',
  value,
  onChangeText,
  height,
  error,
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
      <ErrorLabel>{error}</ErrorLabel>
    </Container>
  );
};
