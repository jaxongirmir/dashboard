import { ScrollArea } from '@mantine/core'
import { IconGauge, IconNotes } from '@tabler/icons-react'
import classes from './Saidbar.module.css'
import { LinksGroup } from './navbarLinkGroup/NavbarLinkGroup'

const mockdata = [
	{
		label: 'OTM strukturasi',
		icon: IconGauge,
		links: [
			{ label: 'Fakultet', link: '/fakultet' },
			{ label: 'Kafedra', link: '/kafedra' },
			{ label: "Bo'lim", link: '/bolim' },
		],
	},
	{
		label: 'Xodimlar',
		icon: IconNotes,
		links: [
			{ label: 'Xodimlar bazasi', link: '/xodimlar-bazasi' },
			{ label: "Xodimlar ro'yxati", link: '/xodimlar-royxati' },
			{ label: "O'qituvchilar ro'yxati", link: '/oqituvchilar-royxati' },
			{ label: 'Malaka oshirish', link: '/malaka-oshirish' },
			{ label: "Tanlovdan o'tish", link: '/tanlovdan-otish' },
			{ label: "O'qituvchi holati", link: '/oqituvchi-holati' },
			{ label: 'Ilmiy status', link: '/ilmiy-status' },
			{ label: 'Xorijiy faoliyat', link: '/xorijiy-faoliyat' },
			{ label: "Xorijiy o'qituvchi", link: '/xorijiy-oqituvchi' },
			{ label: 'Tyutor guruhlari', link: '/tcyutor-guruhlari' },
		],
	},
]

export function Sidebar() {
	const links = mockdata.map(item => <LinksGroup {...item} key={item.label} />)

	return (
		<nav className={classes.navbar}>
			<ScrollArea className={classes.links}>
				<div className={classes.linksInner}>{links}</div>
			</ScrollArea>
		</nav>
	)
}
