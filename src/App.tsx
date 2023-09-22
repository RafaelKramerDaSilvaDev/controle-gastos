import { Center, ChakraProvider } from '@chakra-ui/react';
import { GlobalStyle } from './app/styles/GlobalStyle';
import { ExpenseControl } from './pages/ExpenseControl';
import { ExpenseControlProvider } from './pages/ExpenseControl/contexts/ExpenseControlContext';

function App() {
	return (
		<ExpenseControlProvider>
			<ChakraProvider>
				<Center>
					<ExpenseControl />
				</Center>
				<GlobalStyle />
			</ChakraProvider>
		</ExpenseControlProvider>
	);
}

export default App;
