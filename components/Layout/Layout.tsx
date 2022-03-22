import React, { FC, useEffect, useState } from 'react'
import Animation from '@components/animation/animation'
import Header from '@layout/Header'
import Footer from '@layout/Footer'
import { useAppContext } from '@hooks/context'

const Layout: FC = ({ children }) => {
	const context = useAppContext();

	return (
		<>
			<div className="children">
				<Animation />
				<div className={context.animation ? '' : 'hidden'}>
					<Header />
					{children}
					<Footer />
				</div>
			</div>
		</>
	)
}

export default Layout
function usaAppContext() {
	throw new Error('Function not implemented.')
}

