import React from 'react';
import styles, {
  CheckWrapper,
  Container,
  ContentWrapper,
  Description,
  Divider,
  Title,
} from './styles';
import {Checkbox} from '../';

interface ListItemProps {
  title: string;
  description: string;
}

export const ListItem = ({title, description}: ListItemProps) => {
  return (
    <Container style={styles.containerShadow}>
      <CheckWrapper>
        <Checkbox onCheck={isChecked => console.log(isChecked)} />
      </CheckWrapper>
      <ContentWrapper>
        <Title>{title}</Title>
        <Divider />
        <Description>{description}</Description>
      </ContentWrapper>
    </Container>
  );
};
