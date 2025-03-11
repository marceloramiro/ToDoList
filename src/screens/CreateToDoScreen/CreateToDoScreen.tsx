import {ScrollView} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import Toast from 'react-native-toast-message';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {Card, InputText} from '../../components';
import {useTodoContext} from '../../contexts/TodoContext';
import {Button, Container, ContentWrapper, TextButton, Title} from './styles';

interface FormData {
  id?: number;
  title: string;
  description: string;
}

const DEFAULT_VALUES: FormData = {
  title: '',
  description: '',
};

export const CreateToDoScreen = () => {
  const {addTodo, todos} = useTodoContext();

  const validationSchema = yup.object().shape({
    title: yup.string().required('O título é obrigatório'),
    description: yup.string().required('A descrição é obrigatória'),
  });

  const {
    reset,
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormData) => {
    addTodo({
      id: (todos.length + 1).toString(),
      title: data.title,
      description: data.description,
      isCompleted: false,
    });

    Toast.show({
      type: 'success',
      text1: 'Sucesso!',
      text2: 'Tarefa criada com sucesso!',
    });

    reset(DEFAULT_VALUES);
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <Container>
        <Card>
          <ContentWrapper>
            <Title>Criar nova tarefa</Title>
            <Controller
              name="title"
              control={control}
              render={({field: {onChange, value}}) => (
                <InputText
                  label="Titulo*"
                  value={value}
                  onChangeText={onChange}
                  error={errors.title?.message}
                />
              )}
            />

            <Controller
              name="description"
              control={control}
              render={({field: {onChange, value}}) => (
                <InputText
                  label="Descrição*"
                  value={value}
                  onChangeText={onChange}
                  editable
                  multiline
                  numberOfLines={4}
                  maxLength={500}
                  height={200}
                  textAlignVertical="top"
                  error={errors.description?.message}
                />
              )}
            />
          </ContentWrapper>
          <Button onPress={handleSubmit(onSubmit)}>
            <TextButton>Criar Tarefa</TextButton>
          </Button>
        </Card>
      </Container>
    </ScrollView>
  );
};
