import { ReactNode } from 'react'
import { CSSObject } from 'styled-components'

export type HHWithChildrenProps = { children: ReactNode }
export type HHExtractNumberAndStringType = [number, string]

export interface HHTransitionOptions {
	timing?: CSSObject["transitionTimingFunction"];
	durationInMs?: number;
}

