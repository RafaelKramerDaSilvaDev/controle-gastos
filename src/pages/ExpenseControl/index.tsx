import { CurrencyTable } from './components/CurrencyTable';
import { DataView } from './components/DataView';
import { Forms } from './components/Forms';
import { Header } from './components/Header';
import { useExpenseControl } from './contexts/ExpenseControlContext';
import { CurrencyTableContainer, ExpenseControlContainer, SimulationContainer } from './styles';

export function ExpenseControl() {
	const { monetaryValuesEntry, monetaryValuesOutput, totalIncome, totalExpense } = useExpenseControl();

	return (
		<ExpenseControlContainer>
			<Header simulationIndex={1} />
			<SimulationContainer>
				<Forms />
				<CurrencyTableContainer>
					<CurrencyTable type='income' listMonetaryValues={monetaryValuesEntry} totalMonetaryValues={totalIncome} />
					<CurrencyTable type='expenses' listMonetaryValues={monetaryValuesOutput} totalMonetaryValues={totalExpense} />
				</CurrencyTableContainer>
			</SimulationContainer>
			<DataView />
		</ExpenseControlContainer>
	);
}
