import { ReactNode, createContext, useContext, useState } from 'react';

type ExpenseControlContextType = {
	setMonetaryValuesEntry: React.Dispatch<React.SetStateAction<number[]>>;
	monetaryValuesEntry: number[];
	setMonetaryValuesOutput: React.Dispatch<React.SetStateAction<number[]>>;
	monetaryValuesOutput: number[];
	simulateMonetaryValues(): void;
	totalIncome: number;
	totalExpense: number;
};

const ExpenseControlContext = createContext<ExpenseControlContextType>({} as ExpenseControlContextType);

type ExpenseControlProviderProps = {
	children: ReactNode;
};

export function ExpenseControlProvider({ children }: ExpenseControlProviderProps) {
	const [monetaryValuesEntry, setMonetaryValuesEntry] = useState<number[]>([]);
	const [monetaryValuesOutput, setMonetaryValuesOutput] = useState<number[]>([]);
	const [totalIncome, setTotalIncome] = useState<number>(0);
	const [totalExpense, setTotalExpense] = useState<number>(0);

	function calculateTotal(values: number[]): number {
		return values.reduce((acc, curr) => acc + curr, 0);
	}

	function simulateMonetaryValues() {
		setTotalIncome(calculateTotal(monetaryValuesEntry));
		setTotalExpense(calculateTotal(monetaryValuesOutput));
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
			}}
		>
			{children}
		</ExpenseControlContext.Provider>
	);
}

export function useExpenseControl() {
	const context = useContext(ExpenseControlContext);
	if (context === undefined) {
		throw Error('useExpenseControl deve ser usado dentro de um ExpenseControlProvider');
	}
	return context;
}
