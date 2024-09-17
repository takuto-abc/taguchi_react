// pages/index.tsx

import React from 'react';
import { Container, SimpleGrid } from '@chakra-ui/react';
import Card from '../components/Card';

const HomePage: React.FC = () => (
  <Container maxW="container.lg" py={8}>
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
      <Card title="タイトル1" description="説明文1" />
      <Card title="タイトル2" description="説明文2" />
      <Card title="タイトル3" description="説明文3" />
      {/* 追加のカード */}
    </SimpleGrid>
  </Container>
);

export default HomePage;
