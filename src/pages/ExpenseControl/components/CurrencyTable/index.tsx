import { CurrencyTableContainer, MonetaryValue, Title, TotalMonetaryValues } from './styles';
import { v4 as uuidv4 } from 'uuid';

interface CurrencyTableProps {
	type: 'income' | 'expenses';
	listMonetaryValues: number[];
	totalMonetaryValues: number;
}

export function CurrencyTable({ type, listMonetaryValues, totalMonetaryValues }: CurrencyTableProps) {
	return (
		<CurrencyTableContainer>
			{type === 'income' && <Title>Renda</Title>}
			{type === 'expenses' && <Title>Gastos</Title>}
			{listMonetaryValues &&
				listMonetaryValues.map((monetaryValue) => <MonetaryValue key={uuidv4()}>{monetaryValue}</MonetaryValue>)}
			{type === 'income' && <TotalMonetaryValues>Renda Total (Mensal): {totalMonetaryValues}</TotalMonetaryValues>}
			{type === 'expenses' && <TotalMonetaryValues>Gasto Total (Mensal): {totalMonetaryValues}</TotalMonetaryValues>}
		</CurrencyTableContainer>
	);
}
