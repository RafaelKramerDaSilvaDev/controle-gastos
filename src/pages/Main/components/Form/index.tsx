import { Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { FormStylized } from './styles';

export function Form() {
	return (
		<FormStylized>
			<Stack>
				<FormControl>
					<FormLabel>Entrada</FormLabel>
					<Input placeContent='Digite uma entrada' />
				</FormControl>
				<FormControl>
					<FormLabel>Saída</FormLabel>
					<Input placeContent='Digite uma saída' />
				</FormControl>
				<Button colorScheme='blue'>Simular</Button>
			</Stack>
		</FormStylized>
	);
}
