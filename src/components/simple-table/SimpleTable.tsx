import { Table } from '@mantine/core'

export const SimpleTable = () => {
	const ths: string[] = ['Name', 'Status', 'Connect', 'Scolarship']
	const rows: {
		name: string
		status: string
		connect: string
		scolarship: string
	}[] = [
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
		{ name: 'home', status: 'fail', connect: 'Bind', scolarship: 'school' },
	]
	return (
		<Table striped highlightOnHover withTableBorder withColumnBorders>
			<Table.Thead>
				<Table.Tr>
					{ths.map((el, inx) => (
						<Table.Th key={inx}>{el}</Table.Th>
					))}
				</Table.Tr>
			</Table.Thead>
			{rows.map((row, inx) => (
				<Table.Tbody key={inx}>
					<Table.Td>{row.name}</Table.Td>
					<Table.Td>{row.connect}</Table.Td>
					<Table.Td>{row.status}</Table.Td>
					<Table.Td>{row.scolarship}</Table.Td>
				</Table.Tbody>
			))}
		</Table>
	)
}
