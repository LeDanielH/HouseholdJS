import { round } from './numbers-mod.ts'

export function getElementPosition(item: HTMLElement) {
	const box = item.getBoundingClientRect()

	const { body } = document
	const { documentElement } = document

	const scrollTop =
		window.pageYOffset || documentElement.scrollTop || body.scrollTop
	const scrollLeft =
		window.pageXOffset || documentElement.scrollLeft || body.scrollLeft

	const clientTop = documentElement.clientTop || body.clientTop || 0
	const clientLeft = documentElement.clientLeft || body.clientLeft || 0

	const top = box.top + scrollTop - clientTop
	const left = box.left + scrollLeft - clientLeft

	return { x: round(left), y: round(top) }
}
