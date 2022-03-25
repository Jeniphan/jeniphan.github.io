import { useAppContext } from '@hooks/context';
import React, { FC, useEffect } from 'react'
import Link from 'next/link';

import Switch from "react-switch";
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { Menu, Dropdown, Button, Tooltip } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Gopage } from '@helper/types';

const Header: FC = () => {
	const context = useAppContext()
	const [check, setCheck] = React.useState(false);
	const [page, setPage] = React.useState({ current: 'profile' })

	const handleClick = e => {
		console.log('click ', e);
		window.location.hash = (e.key)
		setPage({ current: e.key });
		if (e.key == 'works') {
			context.setComponent('works')
		}
	};

	const { current } = page;
	const { SubMenu } = Menu;

	const toggleSwitch = (checked: boolean) => {
		setCheck(checked);
		checked ? context.setTheme('light') : context.setTheme('dark');
		localStorage.setItem('theme', checked ? 'light' : 'dark')
	}

	const GoWork = (e: Gopage) => {
		context.setComponent(e)
	}

	useEffect(() => {
		if (context.theme == 'dark') {
			setCheck(false)
		}
		else {
			setCheck(true)
		}
	}, [context.theme])

	const menu = (
		<Menu className={`w-[180px]`} theme={context.theme}>
			<Menu.Item key="profile">
				<Link href='/#profile' passHref>
					<a className="list-menu">
						Profile
					</a>
				</Link>
			</Menu.Item>
			<Menu.Item key="about">
				<Link href='/#about' passHref>
					<a className="list-menu">
						About
					</a>
				</Link>
			</Menu.Item>
			<Menu.Item key="education">
				<Link href='/#education' passHref>
					<a className="list-menu" onClick={(e) => GoWork('educations')}>
						Educations
					</a>
				</Link>
			</Menu.Item>
			<Menu.Item key="work">
				<Link href='/#works' passHref>
					<a className="list-menu" onClick={(e) => GoWork('works')}>
						works
					</a>
				</Link>
			</Menu.Item>
			<Menu.Item key="project">
				<Link href='/#projects' passHref>
					<a className="list-menu">
						Projects
					</a>
				</Link>
			</Menu.Item>
			<Menu.Item key="blog">
				<a className="list-menu disbles">
					Blog
				</a>
			</Menu.Item>
			<Menu.Item key="contact">
				<Link href='/#contact' passHref>
					<a className="list-menu">
						Contact
					</a>
				</Link>
			</Menu.Item>
			<Menu.Item key="switch">
				<Switch
					onChange={(e) => toggleSwitch(e)}
					checked={check}
					onColor={'#ffa500'}
					uncheckedIcon={<BsFillMoonFill className='h-100 w-[18px] ml-[5px]' />}
					checkedIcon={<BsFillSunFill className='h-100 w-[19px] ml-[7px]' />}
				/>
			</Menu.Item>
		</Menu>

	);

	return (
		<div className={`fixed z-[50] h-[70px] w-full ${context.theme == 'dark' ? 'background' : 'bg-primary'}`}>
			<div className="header container w-100 h-100 ">
				<div className="row align-items-center h-100 w-100">

					<div className="title-text col-md flex justify-content-between">
						<Link href="/#profile" passHref>
							<h1>Akiira</h1>
						</Link>
						<div className="menu col-md">
							<Dropdown overlay={menu} placement="bottomRight" arrow className="background">
								<Button className="botton-menu">
									<MenuOutlined className="icon-menu" />
								</Button>
							</Dropdown>
						</div>
					</div>

					<div className="col-md w-full nav-header">
						<Menu onClick={(e) => handleClick(e)}
							selectedKeys={[current]}
							mode="horizontal"
							theme={context.theme}
							className="flex justify-content-center">
							<SubMenu key="SubMenu" title="Profile">
								<Menu.ItemGroup title="Table of content">
									<Menu.Item key="profile">Profile</Menu.Item>
									<Menu.Item key="about">About</Menu.Item>
									<Menu.Item key="education" onClick={(e) => GoWork('educations')}>Educations</Menu.Item>
									<Menu.Item key="works" onClick={(e) => GoWork('works')}>Works</Menu.Item>
									<Menu.Item key="skills">Skills</Menu.Item>
									<Menu.Item key="projects">Projects</Menu.Item>
									<Menu.Item key="contact">Contact</Menu.Item>
								</Menu.ItemGroup>
							</SubMenu>
							<Menu.Item key="blog">
								<Tooltip placement="bottom" title="Coming soon">
									Blog
								</Tooltip>
							</Menu.Item>
							<Menu.Item key="contact" >
								Contact
							</Menu.Item>
						</Menu>
					</div>

					<div className="switch col-md align-items-center">
						<Switch
							onChange={(e) => toggleSwitch(e)}
							checked={check}
							onColor={'#ffa500'}
							uncheckedIcon={<BsFillMoonFill className='h-100 w-[18px] ml-[5px]' />}
							checkedIcon={<BsFillSunFill className='h-100 w-[19px] ml-[7px]' />}
						/>
					</div>

				</div>
			</div>
		</div>

	)
}

export default Header
