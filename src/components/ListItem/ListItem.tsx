import React from 'react';
import {
  CheckWrapper,
  ContentWrapper,
  Description,
  Divider,
  Title,
  Container,
} from './styles';
import {Checkbox, Card, StatusBadge} from '../';
import {useTodoContext} from '../../contexts/TodoContext';

interface ListItemProps {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
}

export const ListItem = ({
  id,
  title,
  description,
  isCompleted,
}: ListItemProps) => {
  const {setTodoIsCompleted} = useTodoContext();

  const handleCheck = (isChecked: boolean) => {
    setTodoIsCompleted(id, isChecked);
  };

  return (
    <Card>
      <StatusBadge status={isCompleted ? 'concluído' : 'pendente'} />
      <Container>
        <CheckWrapper>
          <Checkbox onCheck={handleCheck} isChecked={isCompleted} />
        </CheckWrapper>
        <ContentWrapper>
          <Title>{title}</Title>
          <Divider />
          <Description>{description}</Description>
        </ContentWrapper>
      </Container>
    </Card>
  );
};
