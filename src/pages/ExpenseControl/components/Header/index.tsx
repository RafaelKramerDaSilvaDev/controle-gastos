import { Box, Button } from '@chakra-ui/react';
import { HeaderContainer, Title } from './styles';

interface HeaderProps {
	simulationIndex: number;
}

export function Header({ simulationIndex }: HeaderProps) {
	return (
		<HeaderContainer>
			<Title>Controle Financeiro</Title>
			<Box display='flex' gap='8px'>
				<Button>{simulationIndex}</Button>
				<Button>Nova Simulação</Button>
			</Box>
		</HeaderContainer>
	);
}
