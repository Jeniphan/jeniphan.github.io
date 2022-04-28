import type { NextPage } from 'next'
import Head from 'next/head'

import Titlecontent from '@components/titlecontent/titlecontent'
import Education from '@components/education/education';
import Aboutme from '@components/aboutme/aboutme';
import Work from '@components/work/work';
import Skill from '@components/skill/skill';
import Project from '@components/projects/project';

import Fade from 'react-reveal/Fade';
import { Menu } from 'antd';
import { useEffect, useState } from 'react';
import { useAppContext } from '@hooks/context';
import Contact from '@components/contact/contact';


const Home: NextPage = () => {

	const context = useAppContext()

	useEffect(() => {
		const item = localStorage.getItem('theme')

		const handleResize = () => {
			context.setWindowWidth(window.innerWidth)
		}
		window.addEventListener('resize', handleResize);

		if (item == undefined) {
			localStorage.setItem('theme', context.theme)
		}
		else (
			context.setTheme(item == 'dark' ? 'dark' : 'light')
		)

		return () => {
			window.removeEventListener('resize', handleResize)
		}

	}, [])

	const handleClick = (e) => {
		context.setComponent({ current: e });
	};

	const { current } = context.component;

	return (
		<>
			<Head>
				<title>Jetniphan Pukkham-@All about me.</title>
				<meta
					name="description"
					content="Hello my name is Jetniphan Pukkham. I'am FrontEnd Developer. This all about for me."
				/>

				<meta property="og:title" content="Jetniphan Pukkham-@All about me." />
				<meta
					property="og:description"
					content="Hello my name is Jetniphan Pukkham. I'am FrontEnd Developer. This all about for me."
				/>
				<meta property="og:url" content="https://jeniphan.github.io/" />
				<meta property="og:type" content="website" />
				<meta name="theme-color" content="#ffa500" />
				<meta property="og:image" content="https://jeniphan.github.io/image/SEO__Jetniphan.png" />
				<meta property="fb:app_id" content="1137762390349813" />

				<meta name="viewport" content="initial-scale=1.0, width=device-width" />

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:image" content="https://jeniphan.github.io/image/SEO__Jetniphan.png" />
				<meta property="twitter:url" content="https://jeniphan.github.io/" />
				<meta property="twitter:title" content="Jetniphan Pukkham-@All about me." />
				<meta
					property="twitter:description"
					content="Hello my name is Jetniphan Pukkham. I'am FrontEnd Developer. This all about for me."
				/>
				<meta name="twitter:site" content="@Jnpk_" />
				<meta name="twitter:creator" content="@Jnpk_" />

				<meta
					name="keywords"
					content="akiira, Akiira, akira, Akiira, akiira.online, akiira about, jaay jetniphan, Jaay, Jay, Jaay Jetniphan, 
					Jeniphan Pukkham, Jetniphan, Jeniphan, Jeniphan Pukkham, Jaay Jeniphan, jaay jeniphan, Jeni, jeni,
					web, web developer, front end, frontend, front-end, frontend developer, frontend dev, full-stack, full stack, dev"
				/>

				<link rel="icon" href="/favicon.png" />

			</Head>

			<div className={`${context.theme == 'dark' ? 'bg-content' : '.bg-content-light'} content`}>
				<div className="container pt-[70px]" id="profile">
					<div className="padding_in pr-[100px] pl-[100px]">
						<Fade bottom when={context.animation}>
							<Titlecontent />
						</Fade>
					</div>

					<div className="twocontent row w-full m-0 pr-[100px] pl-[100px]" id="about">
						<Aboutme />
					</div>

					<div id="educations">
						<div className="q_content w-full m-0 pr-[100px] pl-[100px] h-[100vh] pt-[70px]" id="works">
							<div className="title_q text-center">
								<h1 className={context.theme == 'dark' ? 'text-[#fafafa]' : 'text-[#3f3f3f]'}>
									Qualification
								</h1>
								<p className={context.theme == 'dark' ? 'text-[#fafafa6e]' : 'text-[#3f3f3f6e]'}>
									My personal journey
								</p>
							</div>

							<div className={`${context.theme == 'dark' ? 'menu_q_dark' : 'menu_q_light'} mt-[100px]`}>
								<Menu
									onClick={(e) => {
										handleClick(e.key)
									}}
									selectedKeys={[current]}
									mode="horizontal"
									className="flex justify-content-center"
									theme={context.theme}>
									<Menu.Item key="educations">
										Educations
									</Menu.Item>

									<Menu.Item key="works">
										Works
									</Menu.Item>
								</Menu>
							</div>

							<div className={`${context.component.current == 'works' ? 'hidden' : ''} education h-100 w-auto overflow-hidden`}>
								<Fade left when={context.component.current == 'works' ? false : true}>
									<Education />
								</Fade>
							</div>

							<div className={`${context.component.current == 'works' ? '' : 'hidden'} work h-100 w-auto overflow-hidden`}>
								<Fade right when={context.component.current == 'works' ? true : false}>
									<Work />
								</Fade>
							</div>
						</div>
					</div>

					<div className="skillcontent row w-full m-0 pr-[100px] pl-[100px]" id="skills">
						<Skill />
					</div>

					<div className="projectcontent row w-full m-0 pr-[100px] pl-[100px]" id="projects">
						<Project />
					</div>

					<div className="projectcontent row w-full m-0 pr-[100px] pl-[100px]" id="contact">
						<Contact />
					</div>

				</div>
			</div>

		</>
	)
}

export default Home
