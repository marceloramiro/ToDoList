import {ListItem} from '../../components';
import {Container} from './styles';

export const TodosListScreen = () => {
  return (
    <Container>
      <ListItem title="Title 1" description="Description 1" />
      <ListItem title="Title 2" description="Description 2" />
      <ListItem title="Title 3" description="Description 3" />
      <ListItem title="Title 4" description="Description 4" />
    </Container>
  );
};
