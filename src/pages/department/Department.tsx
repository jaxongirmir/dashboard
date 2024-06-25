import { Button, Input } from '@mantine/core'
import { useForm } from '@mantine/form'
import { IconCheck, IconTrash, IconX } from '@tabler/icons-react'
import { FC, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SimpleTable } from '../../components/simple-table/SimpleTable'
import { SwitchThumbButton } from '../../ui/buttons/SwitchThumbButton'
import { DynamicSelect } from '../../ui/dynamic-select/DynamicSelect'

type TTableData = {
	title: string
	values: (string | JSX.Element)[]
	width?: string
}[]

type TData = string[]

export const Department: FC = () => {
	const { pathname } = useLocation()
	const [changeDepartment, setChangeDepartment] = useState<boolean>(false)

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

	const TableData: TTableData = [
		{
			title: 'Kod',
			values: [
				'22',
				'23',
				'21',
				'02',
				'21',
				'13',
				'45',
				'37',
				'22',
				'23',
				'21',
				'02',
				'21',
				'13',
				'45',
				'37',
				'22',
				'23',
				'21',
				'02',
				'21',
				'13',
				'45',
				'37',
				'22',
				'37',
				'22',
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
			title: 'Fakultet',
			values: [
				'Iqtisodiyot va boshqaruv',
				'Energetika va mehnat muhofazasi',
				'Mashinasozlik',
				'Transport',
				'Muhandislik kommunikatsiyalari',
				'Sanoatni axborotlashtirish',
				'Qurilish',
				'Iqtisodiyot va boshqaruv',
				'Energetika va mehnat muhofazasi',
				'Mashinasozlik',
				'Transport',
				'Muhandislik kommunikatsiyalari',
				'Sanoatni axborotlashtirish',
				'Qurilish',
				'Iqtisodiyot va boshqaruv',
				'Energetika va mehnat muhofazasi',
				'Mashinasozlik',
				'Transport',
				'Muhandislik kommunikatsiyalari',
				'Sanoatni axborotlashtirish',
				'Qurilish',
				'Iqtisodiyot va boshqaruv',
				'Energetika va mehnat muhofazasi',
				'Mashinasozlik',
				'Transport',
				'Muhandislik kommunikatsiyalari',
				'Sanoatni axborotlashtirish',
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

	const handleSubmit = (values: any) => {
		console.log('Form values:', values)
		// Add your form submission logic here
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
