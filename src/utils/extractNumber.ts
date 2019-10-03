import { HHExtractNumberAndStringType } from '../types'

const extractNumberRegex = /[\d|,|.|\+]+/g
const extractStringRegex = /[^\d|,|.|\+]+/g

export const extractNumberAndUnitFromString = (
	numberWithString: string
): HHExtractNumberAndStringType => {
	const number = numberWithString.match(extractNumberRegex) // creates array from matches
	const unit = numberWithString.match(extractStringRegex)
	if (!number) {
		throw new Error(
			'extractNumberAndUnitFromString - expected formats are 1, 1.223, 1,2223, have not found any such number'
		)
	}
	const numberExtracted = Number(number[0])
	const unitExtracted = unit ? unit[0] : ''
	return [numberExtracted, unitExtracted]
}
