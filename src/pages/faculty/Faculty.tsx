import { Button, Input, ScrollArea, Table } from '@mantine/core'
import { useForm } from '@mantine/form'
import { IconCheck, IconTrash, IconX } from '@tabler/icons-react'
import axios from 'axios'
import cx from 'clsx'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SwitchThumbButton } from '../../ui/buttons/SwitchThumbButton'
import { DynamicSelect } from '../../ui/dynamic-select/DynamicSelect'
import { MAIN_URL } from '../../url/url'

type TData = string[]
export const Faculty = () => {
	const { pathname } = useLocation()

	const data: TData = ['Mahalliy', 'Qo‘shma', 'Bo‘lim', 'Boshqa']
	const [changeFaculty, setChangeFaculty] = useState<boolean>(false)
	const [scrolled, setScrolled] = useState<boolean>(false)
	const [getData, setGetData] = useState<any>([])
	const [status, setStatus] = useState<boolean>(false)

	const form = useForm({
		initialValues: {
			name: '',
			code: '',
			type: '',
		},
	})

	useEffect(() => {
		setChangeFaculty(false)
	}, [])

	const first = (type: any) => {
		switch (type) {
			case 'Mahalliy':
				return 'local'
			case 'Qo‘shma':
				return 'joint'
			case 'Bo‘lim':
				return 'division'
			case 'Boshqa':
				return 'other'
			default:
				break
		}
	}
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
		const facultyData = {
			name: values.name,
			code: values.code,
			type: first(values.type),
		}
		// Add your form submission logic here
		axios.post(`${MAIN_URL}/faculties/`, facultyData).then(() => {
			values.name = ''
			values.code = ''
			values.type = ''
			setStatus(v => !v)
		})
	}
	useEffect(() => {
		axios.get(`${MAIN_URL}/faculties/`).then(res => {
			setGetData(res.data)
		})
	}, [status])

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
										<Table.Td>{engToRu(el.type)}</Table.Td>
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
								placeholder='Fakultet nomini kiriting'
								{...form.getInputProps('name')}
							/>
						</div>
						<div className='line'>
							<p>Kod</p>
							<Input
								placeholder='Fakultet kodini kiriting'
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
								placeholder='Fakultet turini tanlang'
								value={form.values.type}
								setValue={(value: any) => form.setFieldValue('type', value)}
							/>
						</div>
						{!changeFaculty ? (
							<Button type='submit'>
								<IconCheck />
								Saqlash
							</Button>
						) : (
							<div className='btns'>
								<Button color='gray' onClick={() => setChangeFaculty(false)}>
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
