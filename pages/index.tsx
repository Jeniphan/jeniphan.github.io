import type { NextPage } from 'next'
import Head from 'next/head'
import Titlecontent from '@components/titlecontent/titlecontent'
import Fade from 'react-reveal/Fade';
import { useAppContext } from '@hooks/context';
import Education from '@components/education/education';
import Navigation from '@components/navigation/navigation';
import { useEffect } from 'react';
import Aboutme from '@components/aboutme/aboutme';

const Home: NextPage = () => {

	const context = useAppContext()

	useEffect(() => {
		const item = localStorage.getItem('theme')
		if (item == undefined) {
			localStorage.setItem('theme', context.theme)
		}
		else (
			context.setTheme(item == 'dark' ? 'dark' : 'light')
		)
	}, [])

	return (
		<>
			<Head>
				<title>Jetniphan Pukkham-@All about me.</title>
				<meta name="theme-color" content="#FC4F4F" />
				<meta property="og:type" content="website" />
				<meta
					name="description"
					content="Jetniphan Pukkham-@All about me."
				/>
				<link rel="icon" href="/favicon.png" />
			</Head>

			<div className={`${context.theme == 'dark' ? 'bg-content' : '.bg-content-light'} content`}>
				<div className="container pt-[70px]">
					<div className="padding_in pr-[100px] pl-[100px]">
						<Fade bottom when={context.animation}>
							<Titlecontent />
						</Fade>
					</div>

					<div className="twocontent row w-full m-0 pr-[100px] pl-[100px]">
						<Aboutme />
					</div>

					{/* <div className="education">
						<Education />
					</div> */}
				</div>
			</div>

		</>
	)
}

export default Home
