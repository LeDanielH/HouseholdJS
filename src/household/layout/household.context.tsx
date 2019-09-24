import React, { Children, isValidElement, cloneElement } from 'react'
import { HHTheme } from '../theme'
import { HHWithChildrenProps } from '../../types'
import { HHProviderProps, HHWithThemeProps } from './household.types'

/**
 * @ignore
 */
export const ThemeContext = React.createContext({ theme: HHTheme })

export const HHProvider = ({ theme = HHTheme, children }: HHProviderProps) => (
	<ThemeContext.Provider value={{ theme }}>
		{Children.only(children)}
	</ThemeContext.Provider>
)

export const HHConsumer = ({ children }: HHWithChildrenProps) => {
	return (
		<ThemeContext.Consumer>
			{(context: HHWithThemeProps) => {
				if (context === undefined) {
					throw new Error(
						'HHConsumer must be used within a HHProvider'
					)
				}

				if (isValidElement(children)) {
					return cloneElement(children, { theme: context.theme })
				} else {
					throw new Error(
						'HHConsumer child is not valid React element'
					)
				}
			}}
		</ThemeContext.Consumer>
	)
}
