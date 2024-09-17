// components/Header.tsx

import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

const Header: React.FC = () => (
    <Box as="header" position="relative">
      <Box
        as="video"
        autoPlay
        muted
        loop
        playsInline
        position="absolute"
        width="100%"
        height="100%"
        objectFit="cover"
      >
        <source src="/img/1058-142621439_small.mp4" type="video/mp4" />
      </Box>
      <Box position="relative" zIndex="1" p={4}>
        <Heading as="h1">
          大阪公立大学<br />商学部 田口ゼミ
        </Heading>
        <hr />
        <Text mt={4}>
          ここは大阪公立大学商学部商学科田口ゼミナールのホームページです。<br />
          「モノづくり企業のイノベーション戦略と価値共創」を研究しています。<br />
          グループワークを中心に、サブゼミ、本ゼミという形式で研究活動を行っています。
        </Text>
        <Button variant="solid" colorScheme="red" mt={4}>
          現在、ゼミの研究に関するアンケート調査を実施しています！<br />
          ご協力よろしくお願いします！
        </Button>
      </Box>
    </Box>
  );
  
  export default Header;
