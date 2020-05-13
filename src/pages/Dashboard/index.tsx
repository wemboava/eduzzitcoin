import React from 'react';
import Extract from '../../components/extract';
import Header from '../../components/common/header';
import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Extract />
      </Content>
    </Container>
  );
};

export default Dashboard;
