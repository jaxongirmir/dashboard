import { Button, Input } from '@mantine/core'
import { useForm } from '@mantine/form'
import { IconCheck, IconTrash, IconX } from '@tabler/icons-react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SimpleTable } from '../../components/simple-table/SimpleTable'
import { SwitchThumbButton } from '../../ui/buttons/SwitchThumbButton'
import { DynamicSelect } from '../../ui/dynamic-select/DynamicSelect'
import { MAIN_URL } from '../../url/url'

type TData = string[]
type TTableData = {
	title: string
	values: (string | JSX.Element)[]
	width?: string
}[]

export const Faculty = () => {
	const { pathname } = useLocation()

	const data: TData = ['Mahalliy', 'Qo‘shma', 'Bo‘lim', 'Boshqa']
	const [changeFaculty, setChangeFaculty] = useState<boolean>(false)

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

	const TableData: TTableData = [
		{
			title: 'Kod',
			values: [
				'222',
				'123',
				'121',
				'002',
				'321',
				'213',
				'645',
				'237',
				'222',
				'123',
				'121',
				'002',
				'321',
				'213',
				'645',
				'237',
				'222',
				'123',
				'121',
				'002',
				'321',
				'213',
				'645',
				'237',
				'222',
				'237',
				'222',
			],
		},
		{
			title: 'Nomi',
			values: [
				'Menejment',
				'Kompyuter Injenering',
				'Dasturiy Injeneriya',
				'Menejment',
				'Kompyuter Injenering',
				'Dasturiy Injeneriya',
				'Menejment',
				'Kompyuter Injenering',
				'Dasturiy Injeneriya',
				'Menejment',
				'Kompyuter Injenering',
				'Dasturiy Injeneriya',
				'Menejment',
				'Kompyuter Injenering',
				'Dasturiy Injeneriya',
				'Menejment',
				'Kompyuter Injenering',
				'Dasturiy Injeneriya',
				'Menejment',
				'Kompyuter Injenering',
				'Dasturiy Injeneriya',
				'Menejment',
				'Kompyuter Injenering',
				'Dasturiy Injeneriya',
				'Menejment',
				'Kompyuter Injenering',
				'Dasturiy Injeneriya',
			],
		},
		{
			title: 'Turi',
			values: [
				'Mahaliy',
				'Mahaliy',
				'Mahaliy',
				'Mahaliy',
				'Mahaliy',
				'Mahaliy',
				'Mahaliy',
				'Mahaliy',
				'Mahaliy',
				'Mahaliy',
				'Mahaliy',
				'Mahaliy',
				'Mahaliy',
				'Mahaliy',
				'Mahaliy',
				'Mahaliy',
				'Mahaliy',
				'Mahaliy',
				'Mahaliy',
				'Mahaliy',
				'Mahaliy',
				'Mahaliy',
				'Mahaliy',
				'Mahaliy',
				'Mahaliy',
				'Mahaliy',
				'Mahaliy',
			],
		},
		{
			title: 'Faol',
			width: '20px',
			values: [
				<SwitchThumbButton />,
				<SwitchThumbButton />,
				<SwitchThumbButton />,
				<SwitchThumbButton />,
				<SwitchThumbButton />,
				<SwitchThumbButton />,
				<SwitchThumbButton />,
				<SwitchThumbButton />,
				<SwitchThumbButton />,
				<SwitchThumbButton />,
				<SwitchThumbButton />,
				<SwitchThumbButton />,
				<SwitchThumbButton />,
				<SwitchThumbButton />,
				<SwitchThumbButton />,
				<SwitchThumbButton />,
				<SwitchThumbButton />,
				<SwitchThumbButton />,
				<SwitchThumbButton />,
				<SwitchThumbButton />,
				<SwitchThumbButton />,
				<SwitchThumbButton />,
				<SwitchThumbButton />,
				<SwitchThumbButton />,
				<SwitchThumbButton />,
				<SwitchThumbButton />,
				<SwitchThumbButton />,
			],
		},
	]
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

	const handleSubmit = (values: any) => {
		console.log('Form values:', values)
		const facultyData = {
			name: values.name,
			code: values.code,
			type: first(values.type),
		}
		// Add your form submission logic here
		axios.post(`${MAIN_URL}/faculties/`, facultyData).then(res => {
			console.log(res)
			values.name = ''
			values.code = ''
			values.type = ''
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
					<SimpleTable style='100%' tableData={TableData} />
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
