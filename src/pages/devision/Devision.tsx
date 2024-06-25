import { Button, Input, ScrollArea, Table } from '@mantine/core'
import { useForm } from '@mantine/form'
import { IconCheck, IconTrash, IconX } from '@tabler/icons-react'
import axios from 'axios'
import cx from 'clsx'
import { FC, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SwitchThumbButton } from '../../ui/buttons/SwitchThumbButton'
import { DynamicSelect } from '../../ui/dynamic-select/DynamicSelect'
import { MAIN_URL } from '../../url/url'

export const Devision: FC = () => {
	const [changeDevision, setChangeDevision] = useState<boolean>(false)
	const [scrolled, setScrolled] = useState<boolean>(false)
	const [getData, setGetData] = useState([])
	const { pathname } = useLocation()
	const [selectData, setSelectData] = useState([])
	const form = useForm({
		initialValues: { name: '', code: '', type: '' },
		validate: {
			name: (value) => (value.length < 2 ? "Name must have at least 2 letters" : null),
			code: (value) => (value.length !== 2 ? "Code must have exactly 2 characters" : null),
			type: (value) => (value.length < 2 ? "Type must have at least 2 letters" : null),
		},
	})

	useEffect(() => {
		setChangeDevision(false)
	}, [])

	useEffect(() => {
		axios.get(`${MAIN_URL}/divisions/`).then(res => {
			setGetData(res.data)
		})
	}, [])

	const handleSubmit = async (values: { name: string; code: string; type: string }) => {
		try {
			const response = await axios.post(`${MAIN_URL}/divisions/`, values)
			console.log('Data submitted successfully:', response.data)
			// Optionally, you can update the state or perform any other actions here
		} catch (error) {
			console.error('Error submitting data:', error)
		}
	}

	return (
		<>
			<div className='title'>
				<p>
					<Link to={'/'}> Asosiy</Link> &#10093;
					<span> {pathname.slice(1)}</span>
				</p>
			</div>
			<div className='layout'>
				<div className='right'>
					<ScrollArea
						h={'100dvh'}
						onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
					>
						<Table striped highlightOnHover withTableBorder withColumnBorders>
							<Table.Thead className={cx('header', { ['scrolled']: scrolled })}>
								<Table.Tr>
									<Table.Th style={{ textAlign: 'center' }}>ID raqami</Table.Th>
									<Table.Th style={{ textAlign: 'center' }}>Nomi</Table.Th>
									<Table.Th style={{ textAlign: 'center' }}> Turi </Table.Th>
									<Table.Th style={{ textAlign: 'center', width: '20px' }}>
										status{' '}
									</Table.Th>
								</Table.Tr>
							</Table.Thead>
							<Table.Tbody>
								{getData.map((el: any) => (
									<Table.Tr style={{ textAlign: 'center' }} key={el.user_id}>
										<Table.Td>{el.code}</Table.Td>
										<Table.Td>{el.name}</Table.Td>
										<Table.Td>{el.type}</Table.Td>
										<Table.Td style={{ width: '20px' }}>
											<SwitchThumbButton checked={el.active}  />
										</Table.Td>
									</Table.Tr>
								))}
							</Table.Tbody>
						</Table>
					</ScrollArea>
				</div>
				<div className='left'>
					<form className='create_change' onSubmit={form.onSubmit(handleSubmit)}>
						<div className='line'>
							<p>Nomi</p>
							<Input
								placeholder="Bo'lim nomini kiriting"
								{...form.getInputProps('name')}
							/>
						</div>
						<div className='line'>
							<p>Kod</p>
							<Input
								placeholder="Bo'lim kodini kiriting"
								{...form.getInputProps('code')}
							/>
						</div>
						<div className='line'>
							<p>Turi</p>
							{/* <Input
								placeholder='Turini tanlang'
								{...form.getInputProps('type')}
							/> */}
							<DynamicSelect data={} />
						</div>
						{!changeDevision ? (
							<Button type="submit">
								<IconCheck />
								Saqlash
							</Button>
						) : (
							<div className='btns'>
								<Button color='gray'>
									<IconX />
									Bekor
								</Button>
								<Button color='red'>
									<IconTrash /> Ochirish
								</Button>
								<Button type="submit">
									<IconCheck />
									Saqlash
								</Button>
							</div>
						)}
					</form>
				</div>
			</div>
		</>
	)
}
