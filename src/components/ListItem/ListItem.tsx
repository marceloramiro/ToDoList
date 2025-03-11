import React from 'react';
import {useTodoContext} from '@/contexts/TodoContext';
import {Checkbox, Card, StatusBadge} from '@/components';
import {
  CheckWrapper,
  ContentWrapper,
  Description,
  Divider,
  Title,
  Container,
} from './styles';

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
