import { ReactNode } from 'react';

export interface MonetaryValueProps {
	id: string;
	value: number;
	description: string;
}

export type ExpenseControlProviderProps = {
	children: ReactNode;
};
