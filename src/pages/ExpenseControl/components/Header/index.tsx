import { Button } from '@chakra-ui/react';
import { HeaderContainer, Title } from './styles';

interface HeaderProps {
	simulationIndex: number;
}

export function Header({ simulationIndex }: HeaderProps) {
	return (
		<HeaderContainer>
			<Title>Criar simulações</Title>
			<Button>{simulationIndex}</Button>
			<Button colorScheme='blue'>Nova Simulação</Button>
		</HeaderContainer>
	);
}
