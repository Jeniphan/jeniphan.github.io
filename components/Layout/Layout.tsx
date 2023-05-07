import React, { FC, useEffect, useState } from 'react'
import Animation from '@components/animation/animation'
import Header from '@layout/Header'
import Footer from '@layout/Footer'
import { useAppContext } from '@hooks/context'
import Custom404 from 'pages/404'
import { HttpService } from 'service/api.service'

const Layout: FC = ({ children }) => {
	const context = useAppContext();
	// const httpService = new HttpService()

	let IsfetchSuccess = false;

	// useEffect(() => {
	// 	const url = "api/users/UserInfo?id=532b13b5-3ebb-465d-a29a-2d9036fd2fab"
	// httpService.get(url).then((res) => {
	// 	if (res) {
	// 		console.log(res);
	// 	}
	// })
	// }, [])

	return (
		<>
			<div className="children">
				<div>
					<Animation />
					<Header />
					{children}
					<Footer />
				</div>
				{/* <Custom404></Custom404> */}
			</div>
		</>
	)
}

export default Layout
function usaAppContext() {
	throw new Error('Function not implemented.')
}

