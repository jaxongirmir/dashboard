import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'

const ListOFEmployees: FC = () => {
	// const [click, setClick] = useState<string | null>(null)
	const { pathname } = useLocation()

	return (
		<>
			<div className='title'>
				<p>
					<Link to={'/'}> Asosiy</Link> &#10093;
					<span> {pathname.slice(1)}</span>
				</p>
			</div>
			{/* <SimpleTable tableData={TableData}  /> */}
		</>
	)
}
export default ListOFEmployees
