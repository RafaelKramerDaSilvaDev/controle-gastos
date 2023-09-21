import { Button, Stack } from '@chakra-ui/react';
import { useExpenseControl } from '../../contexts/ExpenseControlContext';
import { MonetaryValueOutputForm } from './MonetaryValueOutputForm';
import { MonetaryValuesEntryForm } from './MonetaryValuesEntryForm';
import { FormContainer } from './styles';

export function Forms() {
	const { simulateMonetaryValues } = useExpenseControl();

	return (
		<FormContainer>
			<Stack>
				<MonetaryValuesEntryForm />
				<MonetaryValueOutputForm />
				<Button colorScheme='blue' onClick={simulateMonetaryValues}>
					Simular
				</Button>
			</Stack>
		</FormContainer>
	);
}
