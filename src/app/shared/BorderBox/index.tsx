import { Box, ChakraProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface BorderBoxProps extends ChakraProps {
	children: ReactNode;
}

export function BorderBox({ children, ...props }: BorderBoxProps) {
	return (
		<Box maxW='sm' borderWidth='1px' borderRadius='lg' p='6' {...props}>
			{children}
		</Box>
	);
}
