import { Switch, rem, useMantineTheme } from '@mantine/core'
import { IconCheck, IconX } from '@tabler/icons-react'
import { useState } from 'react'

export const SwitchThumbButton = () => {
	const theme = useMantineTheme()
	const [checked, setChecked] = useState(true)
	return (
		<Switch
			checked={checked}
			onChange={event => setChecked(event.currentTarget.checked)}
			color='teal'
			size='md'
			thumbIcon={
				checked ? (
					<IconCheck
						style={{ width: rem(12), height: rem(12), cursor: 'pointer' }}
						color={theme.colors.teal[6]}
						stroke={3}
					/>
				) : (
					<IconX
						style={{ width: rem(12), height: rem(12),cursor: 'pointer'  }}
						color={theme.colors.red[6]}
						stroke={3}
					/>
				)
			}
		/>
	)
}
