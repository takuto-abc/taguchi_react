// components/Card.tsx

import { Box, Heading, Text } from '@chakra-ui/react';

type CardProps = {
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ title, description }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
    <Heading as="h3" size="md" mb={2}>
      {title}
    </Heading>
    <Text>{description}</Text>
  </Box>
);

export default Card;
