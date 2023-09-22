import { createContext, useContext, useState } from 'react';
import { ExpenseControlProviderProps, MonetaryValueProps } from '../types';

export type ExpenseControlContextType = {
	setMonetaryValuesEntry: React.Dispatch<React.SetStateAction<MonetaryValueProps[]>>;
	monetaryValuesEntry: MonetaryValueProps[];
	setMonetaryValuesOutput: React.Dispatch<React.SetStateAction<MonetaryValueProps[]>>;
	monetaryValuesOutput: MonetaryValueProps[];
	simulateMonetaryValues: () => void;
	totalIncome: number;
	totalExpense: number;
	balance: number;
	hasSimulated: boolean;
};

// Criando o contexto para o controle de despesas
const ExpenseControlContext = createContext<ExpenseControlContextType | undefined>(undefined);

// Provedor de contexto para gerenciar valores monetários, entradas, saídas e saldo
export function ExpenseControlProvider({ children }: ExpenseControlProviderProps) {
	// Estados para gerenciar valores monetários de entrada e saída
	const [monetaryValuesEntry, setMonetaryValuesEntry] = useState<MonetaryValueProps[]>([]);
	const [monetaryValuesOutput, setMonetaryValuesOutput] = useState<MonetaryValueProps[]>([]);

	// Estados para gerenciar totais de entrada e saída
	const [totalIncome, setTotalIncome] = useState<number>(0);
	const [totalExpense, setTotalExpense] = useState<number>(0);

	// Estado para verificar se a simulação foi realizada
	const [hasSimulated, setHasSimulated] = useState(false);

	// Função para calcular o total dos valores monetários
	function calculateTotal(values: MonetaryValueProps[]): number {
		return values.reduce((acc, curr) => acc + (curr.value ?? 0), 0);
	}

	// Função para simular e atualizar os totais de entrada e saída
	function simulateMonetaryValues() {
		const calculatedIncome = calculateTotal(monetaryValuesEntry);
		const calculatedExpense = calculateTotal(monetaryValuesOutput);

		setTotalIncome(calculatedIncome);
		setTotalExpense(calculatedExpense);

		const validateHasSimulated = calculatedIncome > 0 && calculatedExpense > 0;
		setHasSimulated(validateHasSimulated);
	}

	// Função para obter o saldo
	function getBalance() {
		return totalIncome - totalExpense;
	}

	return (
		<ExpenseControlContext.Provider
			value={{
				setMonetaryValuesEntry,
				monetaryValuesEntry,
				setMonetaryValuesOutput,
				monetaryValuesOutput,
				simulateMonetaryValues,
				totalExpense,
				totalIncome,
				balance: getBalance(),
				hasSimulated,
			}}
		>
			{children}
		</ExpenseControlContext.Provider>
	);
}

// Hook personalizado para acessar o contexto de controle de despesas
export function useExpenseControl() {
	const context = useContext(ExpenseControlContext);

	// Garantindo que o hook seja usado dentro de um provedor
	if (!context) {
		throw Error('useExpenseControl must be used within an ExpenseControlProvider');
	}

	// Acessa o contexto de controle de despesas pela const context
	const { monetaryValuesEntry, monetaryValuesOutput, ...rest } = context;

	// Pega os valores monetários de entrada e saída e permite pegar o restante do contexto usando o rest

	// Conversão para fornecer valores padrões em casos de dados ausentes ou nulos
	const convertedEntries = monetaryValuesEntry.map((entry) => ({
		id: entry.id,
		value: entry.value ?? 0,
		description: entry.description || '',
	}));

	const convertedOutputs = monetaryValuesOutput.map((output) => ({
		id: output.id,
		value: output.value ?? 0,
		description: output.description || '',
	}));

	return {
		// Retorna os valores monetários convertidos e o restante do contexto
		monetaryValuesEntry: convertedEntries,
		monetaryValuesOutput: convertedOutputs,
		...rest,
	};
}
