import { formatCurrency } from '../../../../utils/formatCurrency';
import { MonetaryValueProps } from '../../types';
import { CurrencyTableContainer, MonetaryValue, MonetaryValuesContainer, Title, TotalMonetaryValues } from './styles';

interface CurrencyTableProps {
	type: 'income' | 'expenses'; // Define se este componente será do tipo de renda ou despesa
	listMonetaryValues: MonetaryValueProps[]; // Lista de valores monetários a serem exibidos
	totalMonetaryValues: number; // Valor total (somatório) a ser exibido
}

export function CurrencyTable({ type, listMonetaryValues, totalMonetaryValues }: CurrencyTableProps) {
	return (
		<CurrencyTableContainer>
			<Title>{type === 'income' ? 'Renda' : 'Gastos'}</Title>
			<MonetaryValuesContainer>
				{listMonetaryValues.map(({ id, value, description }) => (
					<MonetaryValue key={id}>
						{formatCurrency(value)} {description && `- ${description}`}
					</MonetaryValue>
				))}
			</MonetaryValuesContainer>
			<TotalMonetaryValues>
				{type === 'income' ? 'Renda' : 'Gasto'} Total (Mensal): {formatCurrency(totalMonetaryValues)}
			</TotalMonetaryValues>
		</CurrencyTableContainer>
	);
}
