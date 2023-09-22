import { formatCurrency } from '../../../../utils/formatCurrency';
import { useExpenseControl } from '../../contexts/ExpenseControlContext';
import { DataViewContainer, Message } from './styles';

export function DataView() {
	// Obtendo o saldo do contexto de controle de despesas
	const { balance } = useExpenseControl();

	// Função para determinar se o saldo é positivo, negativo ou neutro
	function positiveOrNegativeBalance() {
		if (balance > 0) {
			return 'positivo';
		} else if (balance < 0) {
			return 'negativo';
		} else {
			return ''; // Saldo neutro
		}
	}

	return (
		<DataViewContainer>
			<Message>
				Saldo {positiveOrNegativeBalance()} de {formatCurrency(balance)}.
			</Message>
		</DataViewContainer>
	);
}
