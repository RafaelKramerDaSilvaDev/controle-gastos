import { Box } from '@chakra-ui/react';
import { CurrencyTable } from './components/CurrencyTable';
import { DataView } from './components/DataView';
import { Forms } from './components/Forms';
import { Header } from './components/Header';
import { useExpenseControl } from './contexts/ExpenseControlContext';
import { ExpenseControlContainer, SimulationContainer } from './styles';

export function ExpenseControl() {
	const { monetaryValuesEntry, monetaryValuesOutput, totalIncome, totalExpense, hasSimulated } = useExpenseControl();

	return (
		<ExpenseControlContainer>
			<Header simulationIndex={1} />
			<SimulationContainer>
				<Forms />
				<Box
					display='flex'
					flexDir='column'
					backgroundColor='white'
					rounded='2px'
					m='24px'
					p='24px'
					gap='24px'
					w='50%'
					minW='max-content'
				>
					<Box display='flex' gap='24px' w='100%'>
						<CurrencyTable type='income' listMonetaryValues={monetaryValuesEntry} totalMonetaryValues={totalIncome} />
						<CurrencyTable
							type='expenses'
							listMonetaryValues={monetaryValuesOutput}
							totalMonetaryValues={totalExpense}
						/>
					</Box>
					{hasSimulated && <DataView />}
				</Box>
			</SimulationContainer>
		</ExpenseControlContainer>
	);
}
