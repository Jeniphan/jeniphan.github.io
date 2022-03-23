import type { NextPage } from 'next'
import Head from 'next/head'

import Titlecontent from '@components/titlecontent/titlecontent'
import Education from '@components/education/education';
import Aboutme from '@components/aboutme/aboutme';
import Work from '@components/work/work';
import Skill from '@components/skill/skill';

import Fade from 'react-reveal/Fade';
import { Menu } from 'antd';
import { useEffect, useState } from 'react';
import { useAppContext } from '@hooks/context';

const Home: NextPage = () => {

	const context = useAppContext()
	const [checkQualification, setCheckQualification] = useState({ current: 'education' })

	useEffect(() => {
		const item = localStorage.getItem('theme')
		if (item == undefined) {
			localStorage.setItem('theme', context.theme)
		}
		else (
			context.setTheme(item == 'dark' ? 'dark' : 'light')
		)
	}, [])

	const handleClick = (e) => {
		console.log('click ', e);
		setCheckQualification({ current: e.key });
	};

	const { current } = checkQualification;

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

					<div className="q_content w-full m-0 pr-[100px] pl-[100px] h-[100vh] pt-[70px]">
						<div className="title_q text-center">
							<h1 className={context.theme == 'dark' ? 'text-[#fafafa]' : 'text-[#3f3f3f]'}>Qualification</h1>
							<p className={context.theme == 'dark' ? 'text-[#fafafa6e]' : 'text-[#3f3f3f6e]'}>My personal journey</p>
						</div>

						<div className={`${context.theme == 'dark' ? 'menu_q_dark' : 'menu_q_light'} mt-[100px]`}>
							<Menu
								onClick={(e) => handleClick(e)}
								selectedKeys={[current]}
								mode="horizontal"
								className="flex justify-content-center">
								<Menu.Item key="education">
									Educations
								</Menu.Item>

								<Menu.Item key="work">
									Work
								</Menu.Item>
							</Menu>
						</div>

						<div className={`${checkQualification.current == 'work' ? 'hidden' : ''} education h-100 w-auto overflow-hidden`}>
							<Fade left when={checkQualification.current == 'work' ? false : true}>
								<Education />
							</Fade>
						</div>

						<div className={`${checkQualification.current == 'work' ? '' : 'hidden'} work h-100 w-auto overflow-hidden`}>
							<Fade right when={checkQualification.current == 'work' ? true : false}>
								<Work />
							</Fade>
						</div>
					</div>

					<div className="skillcontent row w-full m-0 pr-[100px] pl-[100px]">
						<Skill />
					</div>

				</div>
			</div>

		</>
	)
}

export default Home
