import { Button, Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { ReactNode } from 'react'
// import classes from './UserModal.module.css'

interface ComponentWithChildren {
	children: ReactNode
	title: string
	buttonName: string
	modalClose: boolean
}

export const DynamicModal = ({
	children,
	title,
	buttonName,
	modalClose,
}: ComponentWithChildren) => {
	const [opened, { open, close }] = useDisclosure(false)

	return (
		<>
			<Modal
				opened={opened}
				onClose={close || modalClose}
				title={title}
				centered
				size={'80%'}
			>
				{children}
			</Modal>

			<Button onClick={open}>{buttonName}</Button>
		</>
	)
}
