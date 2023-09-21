import { Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { InferType, number, object } from 'yup';
import { useExpenseControl } from '../../contexts/ExpenseControlContext';

const schema = object({
	monetaryValueOutput: number().positive().required(),
}).required();
type FormData = InferType<typeof schema>;

export function MonetaryValueOutputForm() {
	const {
		register,
		handleSubmit,
		// formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(schema),
	});

	const { setMonetaryValuesOutput } = useExpenseControl();

	function onSubmit(data: FormData) {
		setMonetaryValuesOutput((prevValues) => [...prevValues, data.monetaryValueOutput]);
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Stack>
				<FormControl>
					<FormLabel>Saída</FormLabel>
					<Input type='number' placeholder='Digite uma saída' {...register('monetaryValueOutput')} />
				</FormControl>
				<Button type='submit'>Registrar</Button>
			</Stack>
		</form>
	);
}
