import {Card, InputText} from '../../components';
import {useTodoContext} from '../../contexts/TodoContext';
import {Button, Container, ContentWrapper, TextButton, Title} from './styles';
import {useForm} from 'react-hook-form';

interface FormData {
  id?: number;
  title: string;
  description: string;
}

export const CreateToDoScreen = () => {
  const {addTodo, todos} = useTodoContext();
  const {setValue, handleSubmit} = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    addTodo({
      id: (todos.length + 1).toString(),
      title: data.title,
      description: data.description,
      isCompleted: false,
    });
  };

  return (
    <Container>
      <Card>
        <ContentWrapper>
          <Title>Criar nova tarefa</Title>
          <InputText
            label="Titulo"
            onChangeText={text => {
              setValue('title', text);
            }}
          />
          <InputText
            label="Descrição"
            onChangeText={text => {
              setValue('description', text);
            }}
            editable
            multiline
            numberOfLines={4}
            maxLength={500}
            height={200}
            textAlignVertical="top"
          />
        </ContentWrapper>
        <Button onPress={handleSubmit(onSubmit)}>
          <TextButton>Criar Tarefa</TextButton>
        </Button>
      </Card>
    </Container>
  );
};
