import {
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
	Stack,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { InferType, number, object, string } from 'yup';
import { useExpenseControl } from '../../contexts/ExpenseControlContext';

const schema = object({
	monetaryValueEntry: number().positive().required(),
	description: string(),
}).required();

type FormData = InferType<typeof schema>;

export function MonetaryValuesEntryForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(schema),
	});

	const { setMonetaryValuesEntry } = useExpenseControl();

	function onSubmit(data: FormData) {
		const newEntry = {
			id: uuidv4(),
			value: data.monetaryValueEntry,
			description: data.description || '',
		};
		setMonetaryValuesEntry((prevValues) => [...prevValues, newEntry]);
		reset();
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate>
			<Stack>
				<FormControl>
					<FormLabel>Descrição</FormLabel>
					<Input type='text' placeholder='Descrição uma descrição' {...register('description')} />
				</FormControl>
				<FormControl isRequired isInvalid={!!errors.monetaryValueEntry}>
					<FormLabel>Renda</FormLabel>
					<InputGroup>
						<InputLeftElement pointerEvents='none' color='gray.300' fontSize='1.2em' children='$' />
						<Input type='number' placeholder='Digite um valor de renda' {...register('monetaryValueEntry')} />
					</InputGroup>
					{errors.monetaryValueEntry && <FormErrorMessage>Campo Renda é obrigatório.</FormErrorMessage>}
				</FormControl>

				<Button type='submit'>Registrar</Button>
			</Stack>
		</form>
	);
}
