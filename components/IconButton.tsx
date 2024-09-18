// components/IconButton.tsx

import {
  IconButton as ChakraIconButton,
  IconButtonProps,
} from '@chakra-ui/react';
import { FaCoffee } from 'react-icons/fa';

const IconButton: React.FC<IconButtonProps> = (props) => (
  <ChakraIconButton icon={<FaCoffee />} {...props} />
);

export default IconButton;
