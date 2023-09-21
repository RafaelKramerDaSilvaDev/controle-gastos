import { Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { InferType, number, object } from 'yup';
import { useExpenseControl } from '../../contexts/ExpenseControlContext';

const schema = object({
	monetaryValueEntry: number().positive().required(),
}).required();
type FormData = InferType<typeof schema>;

export function MonetaryValuesEntryForm() {
	const {
		register,
		handleSubmit,
		// formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(schema),
	});

	const { setMonetaryValuesEntry } = useExpenseControl();

	function onSubmit(data: FormData) {
		setMonetaryValuesEntry((prevValues) => [...prevValues, data.monetaryValueEntry]);
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Stack>
				<FormControl>
					<FormLabel>Entrada</FormLabel>
					<Input type='number' placeholder='Digite uma entrada' {...register('monetaryValueEntry')} />
				</FormControl>
				<Button type='submit'>Registrar</Button>
			</Stack>
		</form>
	);
}
