import {FlatList} from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import {useNavigation} from '@react-navigation/native';
import {useTodoContext} from '../../contexts/TodoContext';
import {ListItem, FloatingButton} from '../../components';
import {NavigationProps} from '../../navigation/RootTabs';
import {Button, Container, EmptyContainer, InfoText} from './styles';

export const TodosListScreen = () => {
  const {todos, removeCompletedTodos} = useTodoContext();
  const navigation = useNavigation<NavigationProps>();

  const handleNavigateToCreateToDoScreen = () => {
    navigation.navigate('CreateToDoScreen');
  };

  return (
    <Container>
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 100,
          paddingTop: 20,
        }}
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
      <FloatingButton onPress={removeCompletedTodos} color="red_10">
        <Icon name="trash" size={25} color="white" />
      </FloatingButton>
    </Container>
  );
};
