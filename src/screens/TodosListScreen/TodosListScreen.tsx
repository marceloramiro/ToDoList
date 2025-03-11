import {useMemo} from 'react';
import {FlatList} from 'react-native';
import Toast from 'react-native-toast-message';
import Icon from '@react-native-vector-icons/ionicons';
import {useNavigation} from '@react-navigation/native';
import {useTodoContext} from '@/contexts/TodoContext';
import {NavigationProps} from '@/navigation/RootTabs';
import {ListItem, FloatingButton} from '@/components';
import styles, {Button, Container, EmptyContainer, InfoText} from './styles';

export const TodosListScreen = () => {
  const {todos, removeCompletedTodos} = useTodoContext();
  const navigation = useNavigation<NavigationProps>();
  const hasConcludedTodos = useMemo(
    () => todos?.some(todo => todo?.isCompleted),
    [todos],
  );

  const handleNavigateToCreateToDoScreen = () => {
    navigation.navigate('CreateToDoScreen');
  };

  const handleRemoveCompletedTodos = () => {
    removeCompletedTodos();
    Toast.show({
      type: 'success',
      text1: 'Sucesso!',
      text2: 'Removido todas as tarefas completadas',
      visibilityTime: 1500,
    });
  };

  return (
    <Container>
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.contentContainerStyle}
        ListEmptyComponent={
          <EmptyContainer>
            <Button onPress={handleNavigateToCreateToDoScreen}>
              <Icon name="add" size={25} color="white" />
            </Button>
            <InfoText>Adicionar nova tarefa</InfoText>
          </EmptyContainer>
        }
        renderItem={({item}) => (
          <ListItem
            id={item.id}
            title={item.title}
            description={item.description}
            isCompleted={item.isCompleted}
          />
        )}
      />
      <FloatingButton
        show={hasConcludedTodos}
        onPress={handleRemoveCompletedTodos}
        color="red_10">
        <Icon name="trash" size={25} color="white" />
      </FloatingButton>
    </Container>
  );
};
