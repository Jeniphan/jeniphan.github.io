import React, { FC } from 'react'
import Header from '@layout/Header'
import Footer from '@layout/Footer'

const Layout: FC = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}

export default Layout
