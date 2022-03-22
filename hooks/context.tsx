import React, { FC } from 'react'
import { Theme } from '@helper/types'

interface SharedState {
	theme: Theme
	animation: boolean
	setTheme?: (value: Theme) => void
	setAnimation?: (value: boolean) => void
}

const defaultState: SharedState = {
	theme: 'dark',
	animation: false,
}

const AppContext = React.createContext<SharedState>(defaultState)

export const ContextWrapper: FC = ({ children }) => {
	const [theme, setTheme] = React.useState<Theme>(defaultState.theme)
	const [animation, setAnimation] = React.useState<boolean>(defaultState.animation)

	const sharedState: SharedState = { theme, setTheme, animation, setAnimation }

	return (
		<AppContext.Provider value={sharedState}>
			{children}
		</AppContext.Provider>
	)
}



export const useAppContext = () => React.useContext<SharedState>(AppContext)
