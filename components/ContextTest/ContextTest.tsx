import React, { FC } from 'react'
import { useAppContext } from '@hooks/context'

const ContextTest: FC = () => {
	const context = useAppContext()

	const handleClick = () => {
		context.theme === 'light'
			? context.setTheme('dark')
			: context.setTheme('light')
	}

	return (
		<>
			<div className="text-base text-blue-500">
				Context: {context.theme}
			</div>
			<button
				className="border border-black text-black px-1 block"
				onClick={() => handleClick()}
			>
				toggle theme context
			</button>
		</>
	)
}

export default ContextTest
