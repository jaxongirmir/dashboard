import { rem } from '@mantine/core'
import { DatePickerInput } from '@mantine/dates'
import { IconCalendar } from '@tabler/icons-react'

interface ComponentProps {
	placeholder: string
	label: string
	value: any
	setValue: any
}

export const DynamicInputDatapciker = ({
	placeholder,
	label,
	value,
	setValue,
}: ComponentProps) => {
	const icon = (
		<IconCalendar style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
	)

	return (
		<DatePickerInput
			clearable
			defaultValue={new Date()}
			label={label}
			placeholder={placeholder}
			value={value}
			onChange={e => setValue(e)}
			leftSection={icon}
			leftSectionPointerEvents='none'
			style={{ width: '250px' }}
		/>
	)
}
