import React, { FC } from 'react'
import { Theme } from '@helper/types'

interface SharedState {
	theme: Theme
	setTheme?: (value: Theme) => void
}

const defaultState: SharedState = {
	theme: 'light',
}

const AppContext = React.createContext<SharedState>(defaultState)

export const ContextWrapper: FC = ({ children }) => {
	const [theme, setTheme] = React.useState<Theme>(defaultState.theme)

	const sharedState: SharedState = { theme, setTheme }

	return (
		<AppContext.Provider value={sharedState}>
			{children}
		</AppContext.Provider>
	)
}

export const useAppContext = () => React.useContext<SharedState>(AppContext)
