import { ExtractNumberAndUnitType } from './types'

/**
 * @ignore
 */
const extractNumberRegex = /[\d|,|.|\+]+/g

/**
 * @ignore
 */
const extractStringRegex = /[^\d|,|.|\+]+/g

/**
 * @ignore
 */
export const extractNumberAndUnitFromString = (
	numberWithUnit: string
): ExtractNumberAndUnitType => {
	const number = numberWithUnit.match(extractNumberRegex) // creates array from matches
	const unit = numberWithUnit.match(extractStringRegex)
	if (!number) {
		throw new Error(
			'extractNumberAndUnitFromString - expected number formats are 1, 1.223, 1,2223, have not found any such number'
		)
	}
	const numberExtracted = Number(number[0])
	const unitExtracted = unit ? unit[0] : ''
	return [numberExtracted, unitExtracted]
}

/**
 * @ignore
 */
export const enaufs = extractNumberAndUnitFromString

// TODO: test
