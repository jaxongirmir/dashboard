import { Button, Input } from '@mantine/core'
import { IconCheck, IconTrash, IconX } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SimpleTable } from '../../components/simple-table/SimpleTable'
import { handleChange } from '../../hooks/facultyCodeFormat'
import { SwitchThumbButton } from '../../ui/buttons/SwitchThumbButton'
import { DynamicSelect } from '../../ui/dynamic-select/DynamicSelect'

type TData = string[]
type TCode = string
type TTableData = {
	title: string
	values: (string | JSX.Element)[]
	width?: string
}[]

export const Faculty = () => {
	const { pathname } = useLocation()
	console.log(pathname)

	const data: TData = ['Mahalliy', 'Qo‘shma', 'Bo‘lim', 'Boshqa']
	const [code, setCode] = useState<TCode>('')
	// const [click, setClick] = useState<string | null>(null)
	const [changeFaculty, setChangeFaculty] = useState<boolean>(false)

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
							<Input placeholder='Fakultet nomini kiriting' />
						</div>
						<div className='line'>
							<p>Kod</p>
							<Input
								placeholder='Fakultet kodini kiriting'
								value={code}
								onChange={e => handleChange({ e, setCode, count: 3 })}
							/>
						</div>
						<div className='line'>
							<p>Turi</p>
							<DynamicSelect
								label=''
								data={data}
								placeholder='Fakultet turini tanlang'
							/>
						</div>
						{!changeFaculty ? (
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
