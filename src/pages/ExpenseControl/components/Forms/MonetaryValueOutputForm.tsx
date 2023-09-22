import { Button, FormControl, FormLabel, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { InferType, number, object, string } from 'yup';
import { useExpenseControl } from '../../contexts/ExpenseControlContext';

const schema = object({
	monetaryValueOutput: number().positive().required(),
	description: string(),
}).required();

type FormData = InferType<typeof schema>;

export function MonetaryValueOutputForm() {
	const {
		register,
		handleSubmit,
		reset,
		// formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(schema),
	});

	const { setMonetaryValuesOutput } = useExpenseControl();

	function onSubmit(data: FormData) {
		const newOutput = {
			id: uuidv4(),
			value: data.monetaryValueOutput,
			description: data.description || '',
		};
		setMonetaryValuesOutput((prevValues) => [...prevValues, newOutput]);
		reset();
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Stack>
				<FormControl isRequired>
					<FormLabel>Despesa</FormLabel>
					<InputGroup>
						<InputLeftElement pointerEvents='none' color='gray.300' fontSize='1.2em' children='$' />
						<Input type='number' placeholder='Digite uma saída' {...register('monetaryValueOutput')} />
					</InputGroup>
				</FormControl>
				<FormControl>
					<FormLabel>Descrição</FormLabel>
					<Input placeholder='Descrição da saída' {...register('description')} />
				</FormControl>
				<Button type='submit'>Registrar</Button>
			</Stack>
		</form>
	);
}
