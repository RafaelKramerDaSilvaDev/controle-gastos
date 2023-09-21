import { v4 as uuidv4 } from 'uuid';
import { BorderBox } from '../../../../app/shared/BorderBox';
import { formatCurrency } from '../../../../utils/formatCurrency';
import { CurrencyTableContainer, MonetaryValue, Title, TotalMonetaryValues } from './styles';
import { Box } from '@chakra-ui/react';

interface CurrencyTableProps {
	type: 'income' | 'expenses';
	listMonetaryValues: number[];
	totalMonetaryValues: number;
}

export function CurrencyTable({ type, listMonetaryValues, totalMonetaryValues }: CurrencyTableProps) {
	return (
		<CurrencyTableContainer>
			<BorderBox w='500px'>
				{type === 'income' && <Title>Renda</Title>}
				{type === 'expenses' && <Title>Gastos</Title>}
				<Box overflowY='auto' height='300px'>
					{listMonetaryValues &&
						listMonetaryValues.map((monetaryValue) => (
							<MonetaryValue key={uuidv4()}>{formatCurrency(monetaryValue)}</MonetaryValue>
						))}
				</Box>

				{type === 'income' && (
					<TotalMonetaryValues>Renda Total (Mensal): {formatCurrency(totalMonetaryValues)}</TotalMonetaryValues>
				)}
				{type === 'expenses' && (
					<TotalMonetaryValues>Gasto Total (Mensal): {formatCurrency(totalMonetaryValues)}</TotalMonetaryValues>
				)}
			</BorderBox>
		</CurrencyTableContainer>
	);
}
