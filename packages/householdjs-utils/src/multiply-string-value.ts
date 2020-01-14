import { extractNumberAndUnitFromString } from './extract-number-and-unit-from-string'
// TODO: test

export const multiplyStringValue = (
	numberWithUnit: string,
	multiplier: number
): string => {
	const extractedData = extractNumberAndUnitFromString(numberWithUnit)
	const [number, unit] = extractedData
	return `${number * multiplier}${unit}`
}

export const mvws = multiplyStringValue
