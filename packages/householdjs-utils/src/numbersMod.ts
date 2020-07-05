//
// const numberToRound = 3.1234
// roundUp(numberToRound, 0.1)
// => 3.1
//
export const round = (numberToShorten: number, roundTo: number = 1): number =>
	Math.round(numberToShorten / roundTo) * roundTo;

//
// const numberToRound = 3.1234
// roundDown(numberToRound, 0.01)
// => 3.12
//
export const roundDown = (numberToShorten: number, roundTo: number = 1): number =>
	Math.floor(numberToShorten / roundTo) * roundTo;

//
// const numberToRound = 3.1234
// roundUp(numberToRound, 1)
// => 4
//
export const roundUp = (numberToShorten: number, roundTo: number = 1): number =>
	Math.ceil(numberToShorten / roundTo) * roundTo;

//
// accepts all of it
// will always return a number, at least 0
//
export const getNumber = (number: any, defaultValue: number = 0): number => {
	const value = parseFloat(number);

	return isNaN(value) ? defaultValue : value;
};

//
// accepts all of it
// read the fn name
//
export const isZeroOrPositiveNumber = (valueToCheck: any): boolean =>
	typeof valueToCheck === 'number' && (valueToCheck === 0 || valueToCheck > 0);

//
// some calculations can give you undesired negative number, e.g. when you work with timestamps
// this will make sure, you will get number >= 0
//
export const getPositiveNumber = (number: any, defaultValue: number = 1) => {
	const value = getNumber(number, defaultValue);

	return Math.max(value, defaultValue);
};

export const getRoundedNumber = (number: any, roundTo: number = 1, defaultValue: number = 0) =>
	round(getNumber(number, defaultValue), roundTo);

export const isPositiveNumber = (valueToCheck: any): boolean =>
	typeof valueToCheck === 'number' && (valueToCheck > 0);
