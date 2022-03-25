import React, { FC } from 'react'
import { Gopage, Theme } from '@helper/types'

interface SharedState {
	theme: Theme
	animation: boolean
	component: Gopage
	setTheme?: (value: Theme) => void
	setAnimation?: (value: boolean) => void
	setComponent?: (value: Gopage) => void
}

const defaultState: SharedState = {
	theme: 'dark',
	animation: false,
	component: 'educations'
}

const AppContext = React.createContext<SharedState>(defaultState)

export const ContextWrapper: FC = ({ children }) => {
	const [theme, setTheme] = React.useState<Theme>(defaultState.theme)
	const [animation, setAnimation] = React.useState<boolean>(defaultState.animation)
	const [component, setComponent] = React.useState<Gopage>(defaultState.component)

	const sharedState: SharedState = { theme, setTheme, animation, setAnimation, component, setComponent }

	return (
		<AppContext.Provider value={sharedState}>
			{children}
		</AppContext.Provider>
	)
}



export const useAppContext = () => React.useContext<SharedState>(AppContext)
