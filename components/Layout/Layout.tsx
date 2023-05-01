import React, { FC, useEffect, useState } from 'react'
import Animation from '@components/animation/animation'
import Header from '@layout/Header'
import Footer from '@layout/Footer'
import { useAppContext } from '@hooks/context'
import Custom404 from 'pages/404'
import { HttpService } from 'service/api.service'

const Layout: FC = ({ children }) => {
	const context = useAppContext();
	const httpService = new HttpService()

	let IsfetchSuccess = false;

	// useEffect(() => {
	// 	const url = `https://my-websit.akiira.site/api/profiles/GetProfile?id=ce89ff0c-ad47-4465-a5dd-78dc97c5f850`;
	// 	httpService.get(url).then((res) => {
	// 		if (res) {
	// 			console.log(res);
	// 		}
	// 	})
	// }, [])

	return (
		<>
			<div className="children">
				<Animation />
				<div>
					<Header />
					{children}
					{/* <Custom404></Custom404> */}
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

