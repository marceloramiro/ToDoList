import {FlatList} from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';
import {ListItem, FloatingButton} from '../../components';
import {useTodoContext} from '../../contexts/TodoContext';
import {Container} from './styles';

export const TodosListScreen = () => {
  const {todos, removeCompletedTodos} = useTodoContext();

  return (
    <Container>
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
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
