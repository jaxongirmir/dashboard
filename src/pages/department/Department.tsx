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

type TData = string[]

export const Department: FC = () => {
	const { pathname } = useLocation()
	const [changeDepartment, setChangeDepartment] = useState<boolean>(false)
	const [getData, setGetData] = useState([])
	const [scrolled, setScrolled] = useState<boolean>(false)
	const [state, setState] = useState(false)

	console.log(getData)

	const data: TData = [
		'Iqtisodiyot va boshqaruv',
		'Energetika va mehnat muhofazasi',
		'Mashinasozlik',
		'Transport',
		'Muhandislik kommunikatsiyalari',
		'Sanoatni axborotlashtirish',
		'Qurilish',
	]

	const form = useForm({
		initialValues: {
			name: '',
			code: '',
			type: '',
		},
	})

	useEffect(() => {
		setChangeDepartment(false)
	}, [])
	useEffect(() => {
		axios.get(`${MAIN_URL}/departments/`).then(res => setGetData(res.data))
	}, [state])
	const engToRu = (type: any) => {
		switch (type) {
			case 'joint':
				return "Qo'shma"
			case 'local':
				return 'Mahalliy'
			case 'division':
				return "Bo'lim"
			case 'other':
				return 'Boshqa'
			default:
				break
		}
	}

	const handleSubmit = (values: any) => {
		console.log('Form values:', values)
		// Add your form submission logic here
		const departmentData = {
			code: values.code,
			name: values.name,
			type: values.type,
			faculty_id: 199,
			active: true,
		}
		axios.post(`${MAIN_URL}/departments/`, departmentData).then(() => {
			values.code = ''
			values.name = ''
			values.type = ''
			setState(v => !v)
		})
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
										<Table.Td>{el.faculty.name}</Table.Td>
										<Table.Td>{engToRu(el.faculty.type)}</Table.Td>
										<Table.Td style={{ width: '20px' }}>
											<SwitchThumbButton checked={el.active} />
										</Table.Td>
									</Table.Tr>
								))}
							</Table.Tbody>
						</Table>
					</ScrollArea>
				</div>
				<div className='left'>
					<form
						onSubmit={form.onSubmit(handleSubmit)}
						className='create_change'
					>
						<div className='line'>
							<p>Nomi</p>
							<Input
								placeholder='Kafedrani nomini kiriting'
								{...form.getInputProps('name')}
							/>
						</div>
						<div className='line'>
							<p>Kod</p>
							<Input
								placeholder='Kafedrani kodini kiriting'
								value={form.values.code}
								onChange={e =>
									form.setFieldValue('code', e.currentTarget.value)
								}
							/>
						</div>
						<div className='line'>
							<p>Turi</p>
							<DynamicSelect
								label=''
								data={data}
								placeholder='Fakultet'
								value={form.values.type}
								setValue={(value: any) => form.setFieldValue('type', value)}
							/>
						</div>
						{!changeDepartment ? (
							<Button type='submit'>
								<IconCheck />
								Saqlash
							</Button>
						) : (
							<div className='btns'>
								<Button color='gray' onClick={() => setChangeDepartment(false)}>
									<IconX />
									Bekor
								</Button>
								<Button color='red'>
									<IconTrash /> Ochirish
								</Button>
								<Button type='submit'>
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
