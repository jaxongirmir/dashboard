// core styles are required for all packages
import '@mantine/core/styles.css'
import { Route, Routes } from 'react-router-dom'
import { Sidebar } from './components/sidebar/Sidebar'
import { UserPanel } from './pages/user-panel/UserPanel'

// other css files are required only if
// you are using components from the corresponding package
import '@mantine/dates/styles.css'
// import '@mantine/dropzone/styles.css';
// import '@mantine/code-highlight/styles.css';
// ...

const App = () => {
	return (
		<div className='App'>
			<Sidebar>
				<Routes>
					<Route path='/' element={<UserPanel />} />
					<Route path='/web-site' element={<h2>My Website</h2>} />
				</Routes>
			</Sidebar>
		</div>
	)
}
export default App
