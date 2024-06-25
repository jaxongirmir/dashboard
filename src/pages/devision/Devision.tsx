import { Button, Input } from '@mantine/core'
import { IconCheck, IconTrash, IconX } from '@tabler/icons-react'
import { FC, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SimpleTable } from '../../components/simple-table/SimpleTable'
import { handleChange } from '../../hooks/facultyCodeFormat'
import { SwitchThumbButton } from '../../ui/buttons/SwitchThumbButton'
type TTableData = {
	title: string
	values: (string | JSX.Element)[]
	width?: string
}[]
// type TData = string[]

export const Devision: FC = () => {
	const [code, setCode] = useState<string>('')
	// const [click, setClick] = useState<string | null>(null)
	const [changeDevision, setChangeDevision] = useState<boolean>(false)
	const { pathname } = useLocation()
	// const data: TData = ['Boshqa', "Bo'lim", 'Boshqarma', 'Markaz', 'Rektorat']
	useEffect(() => {
		setChangeDevision(false)
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
				'Institut xotin - qizlar maslahat kengashi',
				"Ta'lim sifatini nazorat qilish bo’limi",
				'Xalqaro hamkorlik bo’limi',
				"Sirtqi bo'lim",
				"O'quv uslubiy boshqarma",
				'Marketing va talabalar amaliyoti bo’limi',
				"Magistratura bo'limi",
				'Iqtidorli talabalarning ilmiy-tadqiqot faoliyatini tashkil etish bo‘limi',
				"Yoshlar bilan ishlash, ma'naviyat va ma'rifat bo'limi",
				'Ilmiy va ilmiy pedagogik kadrlar tayyorlash',
				"Xodimlar bo'limi",
				"Devonxona bo'limi",
				'Axbоrоt-resurs markazi',
				"Raqamli ta'lim texnologiya markazi",
				'Institut xotin - qizlar maslahat kengashi',
				"Ta'lim sifatini nazorat qilish bo’limi",
				'Xalqaro hamkorlik bo’limi',
				"Sirtqi bo'lim",
				"O'quv uslubiy boshqarma",
				'Marketing va talabalar amaliyoti bo’limi',
				"Magistratura bo'limi",
				'Iqtidorli talabalarning ilmiy-tadqiqot faoliyatini tashkil etish bo‘limi',
				"Yoshlar bilan ishlash, ma'naviyat va ma'rifat bo'limi",
				'Ilmiy va ilmiy pedagogik kadrlar tayyorlash',
				"Xodimlar bo'limi",
				"Devonxona bo'limi",
				'Axbоrоt-resurs markazi',
			],
		},
		{
			title: "Bo'limi turi",
			values: [
				'Boshqa',
				"Bo'lim",
				'Boshqarma',
				'Markaz',
				'Rektorat',
				'Boshqa',
				"Bo'lim",
				'Boshqarma',
				'Markaz',
				'Rektorat',
				'Boshqa',
				"Bo'lim",
				'Boshqarma',
				'Markaz',
				'Rektorat',
				'Boshqa',
				"Bo'lim",
				'Boshqarma',
				'Markaz',
				'Rektorat',
				'Boshqa',
				"Bo'lim",
				'Boshqarma',
				'Markaz',
				'Boshqarma',
				'Markaz',
				'Rektorat',
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
							<Input placeholder="Bo'lim nomini  kiriting" />
						</div>
						<div className='line'>
							<p>Kod</p>
							<Input
								placeholder="Bo'lim kodini kiriting"
								value={code}
								onChange={e => handleChange({ e, setCode, count: 2 })}
							/>
						</div>
						<div className='line'>
							<p>Turi</p>
							{/* <DynamicSelect label='' data={data} placeholder="Bo'lim turi"  /> */}
						</div>
						{!changeDevision ? (
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
