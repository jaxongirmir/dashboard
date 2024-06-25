import { Input } from '@mantine/core'
import { Dispatch, SetStateAction } from 'react'
import { DynamicInputDatapicker } from '../ui/dynamic-input-datapicker/DynamicInputDatapicker'
import { DynamicSelect } from '../ui/dynamic-select/DynamicSelect'

export const changeValue = (
	type: string,
	placeholder: string,
	value: string,
	setValue: Dispatch<SetStateAction<string | null>>,
	data?: (string | number)[]
) => {
	switch (type) {
		case 'DynamicSelect':
			return (
				<DynamicSelect
					placeholder={placeholder}
					data={data || []}
					label=''
					value={value}
					setValue={setValue}
				/>
			)
		case 'Input':
			return (
				<Input
					placeholder={placeholder}
					value={value}
					onChange={e => setValue(e.currentTarget.value)}
				/>
			)
		case 'DynamicInputDatapicker':
			return (
				<DynamicInputDatapicker
					placeholder={placeholder}
					label=''
					// value={String(value) || ''}
					// onChange={(newValue: string) => setValue(newValue)}
				/>
			)
		default:
			return null
	}
}
