import styled from 'styled-components';

export const ExpenseControlContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	overflow: hidden;
	border-radius: 40px;
	margin: 60px;

	background-color: #f0f0f0;
	box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px,
		rgba(17, 17, 26, 0.1) 0px 24px 80px;
`;

export const SimulationContainer = styled.div`
	display: flex;
	border-radius: 0 2px 2px 0;
`;
