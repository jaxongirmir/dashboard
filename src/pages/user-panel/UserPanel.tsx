import { Input } from '@mantine/core'
import { FaRegCircleUser } from 'react-icons/fa6'
import { SimpleTable } from '../../components/simple-table/SimpleTable'
import { DynamicInputDatapciker } from '../../ui/dynamic-input-datapicker/DynamicInputDatapicker'
import { DynamicModal } from '../../ui/dynamic-modal/DynamicModal'
import { DynamicSelect } from '../../ui/dynamic-select/DynamicSelect'
import { ImageUploader } from '../../ui/image-uploader/ImageUploader'
import classes from './UserPanel.module.css'

export const UserPanel = () => {
	const data: string[] = [
		'Ishchi',
		'Student',
		'Oqituvchi',
		'Soldat',
		'Qoriqchi',
		'Farosh',
		'Rector',
	]
	const genderData: string[] = ['Erkak', 'Ayol']
	const levelData: string[] = [
		'Orta Talim',
		'Oliy Daraja',
		'Magistratura',
		'Bakalavriyat',
		'Daktrantura',
		'Asperantura',
	]
	const titleData: string[] = ['Zor', 'Normalni', "A'lo", 'Chidasa boladi']
	const yearData: number[] = [2018, 2019, 2020, 2021, 2022, 2023, 2024]
	const modalData: {
		p: string
		type: string
		placeholder: string
		data?: string[] | number[]
	}[] = [
		{
			p: 'FUQAROLIK',
			type: 'DynamicSelect',
			placeholder: 'Fuqarolik',
			data: data,
		},
		{ p: 'PASPORT RAQAMI', type: 'Input', placeholder: 'AA0000001' },
		{ p: 'JSHPR-kod', type: 'Input', placeholder: '3453564356345' },
		{ p: 'FAMILIYA', type: 'Input', placeholder: 'Jahongir' },
		{ p: 'ISM', type: 'Input', placeholder: 'Mirhalikov' },
		{ p: 'OTASINING ISMI', type: 'Input', placeholder: 'Shavkatovich' },
		{
			p: "TUG'ILGAN SANA",
			type: 'DynamicInputDatapciker',
			placeholder: 'Nov 23, 2006',
		},
		{
			p: 'JINS',
			type: 'DynamicSelect',
			placeholder: 'Jins',
			data: genderData,
		},
		{ p: 'Uy MANZIL', type: 'Input', placeholder: 'Booburshox 25-dom 7-kv' },
		{
			p: 'MUTAXASISLIK',
			type: 'Input',
			placeholder: 'Axborot texonologiyalari',
		},
		{
			p: 'ILMIY DARAJA',
			type: 'DynamicSelect',
			placeholder: 'Ilmiy daraja',
			data: levelData,
		},
		{
			p: 'ILMIY UNVON',
			type: 'DynamicSelect',
			placeholder: 'Ilmiy unvon',
			data: titleData,
		},
		{
			p: 'ISHGA KIRGAN YILI',
			type: 'DynamicSelect',
			placeholder: 'Ishga kirgan',
			data: yearData,
		},
		{ p: 'EMAIL', type: 'Input', placeholder: 'joxa_muxa@gmail.com' },
		{ p: 'TELEFON', type: 'Input', placeholder: '+998 90 222 05 36' },
	]

	const getComponent = (
		type: string,
		placeholder: string,
		data?: string[] | number[]
	) => {
		switch (type) {
			case 'DynamicSelect':
				return (
					<DynamicSelect placeholder={placeholder} data={data || []} label='' />
				)
			case 'Input':
				return <Input placeholder={placeholder} />
			case 'DynamicInputDatapciker':
				return <DynamicInputDatapciker placeholder={placeholder} label='' />

			default:
				return null
		}
	}

	return (
		<div>
			<DynamicModal title='Xodim qoshish' buttonName="Xodim qo'shish">
				<div className={classes.modal}>
					<div className={classes.left}>
						<div className={classes.line}>
							{modalData.slice(0, 3).map((el, inx) => (
								<div key={inx} className={classes.input}>
									<p>{el.p}</p>
									{getComponent(el.type, el.placeholder, el.data)}
								</div>
							))}
						</div>
						<div className={classes.line}>
							{modalData.slice(3, 6).map((el, inx) => (
								<div key={inx} className={classes.input}>
									<p>{el.p}</p>
									{getComponent(el.type, el.placeholder, el.data)}
								</div>
							))}
						</div>
						<div className={classes.line}>
							{modalData.slice(6, 9).map((el, inx) => (
								<div key={inx} className={classes.input}>
									<p>{el.p}</p>
									{getComponent(el.type, el.placeholder, el.data)}
								</div>
							))}
						</div>
						<div className={classes.line}>
							{modalData.slice(9, 12).map((el, inx) => (
								<div key={inx} className={classes.input}>
									<p>{el.p}</p>
									{getComponent(el.type, el.placeholder, el.data)}
								</div>
							))}
						</div>
						<div className={classes.line}>
							{modalData.slice(12, 15).map((el, inx) => (
								<div key={inx} className={classes.input}>
									<p>{el.p}</p>
									{getComponent(el.type, el.placeholder, el.data)}
								</div>
							))}
						</div>
					</div>
					<div className={classes.right}>
						<FaRegCircleUser />
						<ImageUploader />
					</div>
				</div>
			</DynamicModal>
			<SimpleTable />
		</div>
	)
}
