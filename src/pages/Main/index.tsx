export function Main() {
	return (
		<div>
			<h2>Criar simulações</h2>
			<button>Nova Simulação</button>
			<br />
			<br />
			<div style={{ display: 'flex', backgroundColor: 'rgba(100, 100, 100, 0.1)' }}>
				<div>
					<div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
						<h1>Simulação 1</h1>
						<button>Apagar Simulação</button>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', width: '400px' }}>
						<label htmlFor=''>Renda</label>
						<p>R$400,00 *conforme for adicionado</p>
						<p>R$200,00</p>
						<p>R$150,00</p>
						<input type='text' />
						<button>Adicionar Renda</button>
						<label htmlFor=''>Gasto</label>
						<input type='text' />
						<button>Adicionar Gasto</button>
						<br />
						<button>Simular</button>
					</div>
					<div>
						<div
							style={{
								display: 'flex',
								gap: '20px',
								margin: '20px',
								backgroundColor: 'rgba(0,0,0,0.1)',
								padding: '20px',
								width: '400px',
							}}
						>
							<div>
								<h1>Renda mensal</h1>
								<p>R$400,00</p>
								<p>R$200,00</p>
								<p>R$150,00</p>
								<p>Renda Total (Mensal): R$750,00</p>
							</div>
							<div>
								<h1>Gasto Mensal</h1>
								<p>R$200,00</p>
								<p>R$200,00</p>
								<p>R$100,00</p>
								<p>Total de Gastos (Mensal): R$400,00</p>
							</div>
						</div>
						<div>
							<p>Após contabilizar todos os ganhos e gastos ao longo do mês, houve um saldo positivo de R$200,00.</p>
						</div>
					</div>
				</div>
				<div>
					<div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
						<h1>Simulação 2</h1>
						<button>Apagar Simulação</button>
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', width: '400px' }}>
						<label htmlFor=''>Renda</label>
						<input type='text' />
						<button>Adicionar Renda</button>
						<label htmlFor=''>Gasto</label>
						<input type='text' />
						<button>Adicionar Gasto</button>
						<br />
						<button>Simular</button>
					</div>
					<div>
						<div
							style={{
								display: 'flex',
								gap: '20px',
								margin: '20px',
								backgroundColor: 'rgba(0,0,0,0.1)',
								padding: '20px',
								width: '400px',
							}}
						>
							<div>
								<h1>Renda mensal</h1>
								<p>R$400,00</p>
								<p>R$200,00</p>
								<p>R$150,00</p>
								<p>Renda Total (Mensal): R$750,00</p>
							</div>
							<div>
								<h1>Gasto Mensal</h1>
								<p>R$200,00</p>
								<p>R$200,00</p>
								<p>R$100,00</p>
								<p>Total de Gastos (Mensal): R$400,00</p>
							</div>
						</div>
						<div>
							<p>Após contabilizar todos os ganhos e gastos ao longo do mês, houve um saldo positivo de R$200,00.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
