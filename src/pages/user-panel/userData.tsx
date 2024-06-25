import { Dispatch, SetStateAction, useState } from 'react'

const data: string[] = ["O'zbekiston", 'Chet el', 'Fuqaroligi yoq']
const genderData: string[] = ['Erkak', 'Ayol']
const levelData: string[] = ['Fan nomzidi', 'Fan doktori', 'Yoq']
const titleData: string[] = [
	'Dotsent',
	'Professor',
	'Katta ilmiy xodim',
	'Akademik	',
]
const yearData: number[] = [2018, 2019, 2020, 2021, 2022, 2023, 2024]
const [citizenShip, setCitizenShip] = useState<string>('')
const [passportNumber, setPassportNumber] = useState<string>('')
const [JSHPR, setJSHPR] = useState<string>('')
const [surname, setSurname] = useState<string>('')
const [name, setName] = useState<string>('')
const [fatherName, setFatherName] = useState<string>('')
// const [birthday, setBirthday] = useState<string>('')
const [gender, setGender] = useState<string>('')
const [address, setAddress] = useState<string>('')
const [expertise, setExpertise] = useState<string>('')
const [scienceDegree, setScienceDegree] = useState<string>('')
const [scientificTitle, setscientificTitle] = useState<string>('')
const [workYear, setWorkYear] = useState<string>('')
const [phoneNumber, setPhoneNumber] = useState<string>('')
const [password, setPassword] = useState<string>('')
export const modalData: {
	p: string
	type: string
	placeholder: string
	data?: string[] | number[]
	value?: string
	setValue?: Dispatch<SetStateAction<string>>
}[] = [
	{
		p: 'FUQAROLIK',
		type: 'DynamicSelect',
		placeholder: 'Fuqarolik',
		data: data,
		value: citizenShip,
		setValue: setCitizenShip,
	},
	{
		p: 'PASPORT RAQAMI',
		type: 'Input',
		placeholder: 'AA0000001',
		value: passportNumber,
		setValue: setPassportNumber,
	},
	{
		p: 'JSHPR-kod',
		type: 'Input',
		placeholder: '3453564356345',
		value: JSHPR,
		setValue: setJSHPR,
	},
	{
		p: 'FAMILIYA',
		type: 'Input',
		placeholder: 'Jahongir',
		value: surname,
		setValue: setSurname,
	},
	{
		p: 'ISM',
		type: 'Input',
		placeholder: 'Mirhalikov',
		value: name,
		setValue: setName,
	},
	{
		p: 'OTASINING ISMI',
		type: 'Input',
		placeholder: 'Shavkatovich',
		value: fatherName,
		setValue: setFatherName,
	},
	{
		p: "TUG'ILGAN SANA",
		type: 'DynamicInputDatapciker',
		placeholder: 'Nov 23, 2006',
		// value: birthday,
		// setValue: setBirthday,
	},
	{
		p: 'JINS',
		type: 'DynamicSelect',
		placeholder: 'Jins',
		data: genderData,
		value: gender,
		setValue: setGender,
	},
	{
		p: 'Uy MANZIL',
		type: 'Input',
		placeholder: 'Booburshox 25-dom 7-kv',
		value: address,
		setValue: setAddress,
	},
	{
		p: 'MUTAXASISLIK',
		type: 'Input',
		placeholder: 'Axborot texonologiyalari',
		value: expertise,
		setValue: setExpertise,
	},
	{
		p: 'ILMIY DARAJA',
		type: 'DynamicSelect',
		placeholder: 'Ilmiy daraja',
		data: levelData,
		value: scienceDegree,
		setValue: setScienceDegree,
	},
	{
		p: 'ILMIY UNVON',
		type: 'DynamicSelect',
		placeholder: 'Ilmiy unvon',
		data: titleData,
		value: scientificTitle,
		setValue: setscientificTitle,
	},
	{
		p: 'ISHGA KIRGAN YILI',
		type: 'DynamicSelect',
		placeholder: 'Ishga kirgan',
		data: yearData,
		value: workYear,
		setValue: setWorkYear,
	},
	{
		p: 'TELEFON',
		type: 'Input',
		placeholder: '+998 90 222 05 36',
		value: phoneNumber,
		setValue: setPhoneNumber,
	},
	{
		p: '',
		type: 'Input',
		placeholder: '*********',
		value: password,
		setValue: setPassword,
	},
]
