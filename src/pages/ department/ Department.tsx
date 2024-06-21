import { Button, Input } from '@mantine/core'
import { IconCheck, IconTrash, IconX } from '@tabler/icons-react'
import { FC, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SimpleTable } from '../../components/simple-table/SimpleTable'
import { handleChange } from '../../hooks/facultyCodeFormat'
import { SwitchThumbButton } from '../../ui/buttons/SwitchThumbButton'
import { DynamicSelect } from '../../ui/dynamic-select/DynamicSelect'
type TTableData = {
	title: string
	values: (string | JSX.Element)[]
	width?: string
}[]
type TData = string[]
export const Department: FC = () => {
	const [code, setCode] = useState<string>('')
	// const [click, setClick] = useState<string | null>(null)
	const [changeDepartment, setChangeDepartment] = useState<boolean>(false)
	const { pathname } = useLocation()
	useEffect(() => {
		setChangeDepartment(false)
	}, [])
	const data: TData = [
		'Iqtisodiyot va boshqaruv',
		'Energetika va mehnat muhofazasi',
		'Mashinasozlik',
		'Transport',
		'Muhandislik kommunikatsiyalari',
		'Sanoatni axborotlashtirish',
		'Qurilish',
	]

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
					<div className='create_change'>
						<div className='line'>
							<p>Nomi</p>
							<Input placeholder='Kafedrani nomini kiriting' />
						</div>
						<div className='line'>
							<p>Kod</p>
							<Input
								placeholder='Kafedrani kodini kiriting'
								value={code}
								onChange={e => handleChange({ e, setCode, count: 2 })}
							/>
						</div>
						<div className='line'>
							<p>Turi</p>
							<DynamicSelect label='' data={data} placeholder='Fakultet' />
						</div>
						{!changeDepartment ? (
							<Button>
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
								<Button>
									<IconCheck />
									Saqlash
								</Button>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	)
}
