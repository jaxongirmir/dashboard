import { ScrollArea } from '@mantine/core'
import { Icon3dCubeSphere, IconGauge, IconNotes } from '@tabler/icons-react'
import { ReactNode } from 'react'
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
		label: 'NamMQI',
		// icon: IconBrandSuperhuman,
		icon: Icon3dCubeSphere,
		links: [
			{ label: 'Xodimlar', link: '/xodimlar' },
			{ label: 'Vakanlar', link: '/vakantlar' },
			{ label: 'Talabalar', link: '/talabalar' },
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
interface ComponentChildren {
	children: ReactNode
}

export function Sidebar({ children }: ComponentChildren) {
	const links = mockdata.map(item => <LinksGroup {...item} key={item.label} />)

	return (
		<div className={classes.layout}>
			<div className={classes.space}>
				<nav className={classes.navbar}>
					<ScrollArea className={classes.links}>
						<div className={classes.linksInner}>{links}</div>
					</ScrollArea>
				</nav>
			</div>
			<div className={classes.content}>{children}</div>
		</div>
	)
}
