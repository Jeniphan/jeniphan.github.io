import { useAppContext } from '@hooks/context';
import React, { FC, useEffect } from 'react'

import Switch from "react-switch";
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { Menu, Dropdown, Button, Tooltip } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const Header: FC = () => {
	const context = useAppContext()
	const [check, setCheck] = React.useState(false);
	const [page, setPage] = React.useState({ current: 'profile' })

	const handleClick = e => {
		console.log('click ', e);
		setPage({ current: e.key });
		if (e.key == '#works' || e.key == 'Works') {
			context.setComponent({ current: 'works' })
		}
		else if (e.key == '#educations' || e.key == 'Educations') {
			context.setComponent({ current: 'educations' })
		}
	};

	const { current } = page;
	const { SubMenu } = Menu;

	const toggleSwitch = (checked: boolean) => {
		setCheck(checked);
		checked ? context.setTheme('light') : context.setTheme('dark');
		localStorage.setItem('theme', checked ? 'light' : 'dark')
	}

	// const GoWork = (e: Gopage) => {
	// 	context.setComponent(e)
	// }

	useEffect(() => {
		if (context.theme == 'dark') {
			setCheck(false)
		}
		else {
			setCheck(true)
		}
	}, [context.theme])

	const menuInMobile = [
		{
			title: 'Profile',
			id: '#profile'
		},
		{
			title: 'About',
			id: '#about'
		},
		{
			title: 'Educations',
			id: '#educations'
		},
		{
			title: 'Works',
			id: '#works'
		},
		{
			title: 'Skills',
			id: '#skills'
		},
		{
			title: 'Project',
			id: '#projects'
		},
		{
			title: 'Contact',
			id: "#contact"
		},
	]
	const menu = (
		<Menu className={`w-[180px]`} theme={context.theme}>
			{menuInMobile.map((data, Index) => {
				return (
					<Menu.Item
						key={Index}
						onClick={(e) => {
							document.querySelector(data.id).scrollIntoView({
								behavior: 'smooth'
							})
							handleClick({ key: data.id });
						}
						}>
						{data.title}
					</Menu.Item>
				)
			})}
			<Menu.Item key="blog" disabled>
				<Tooltip placement="bottom" title="Coming soon">
					<a className="list-menu disbles">
						Blog
					</a>
				</Tooltip>
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
		</Menu >

	);

	return (
		<div className={`header__top fixed z-[50] h-[70px] w-full ${context.theme == 'dark' ? 'background' : 'bg-primary'}`}>
			<div className="header container w-100 h-100 ">
				<div className="row align-items-center h-100 w-100">

					<div className="title-text col-md flex justify-content-between">
						<h1 onClick={() => {
							document.querySelector('#profile').scrollIntoView({
								behavior: 'smooth'
							})
						}}
						>
							Akiira
						</h1>
						<div className="menu col-md">
							<Dropdown overlay={menu} placement="bottomRight" arrow className="background">
								<Button className="botton-menu">
									<MenuOutlined className="icon-menu" />
								</Button>
							</Dropdown>
						</div>
					</div>

					<div className="col-md w-full nav-header">
						<Menu onClick={
							(e) => {
								document.querySelector(e.key).scrollIntoView({
									behavior: 'smooth'
								})
								handleClick(e)
							}
						}
							selectedKeys={[current]}
							mode="horizontal"
							theme={context.theme}
							className="flex justify-content-center">
							<SubMenu key="#SubMenu" title="Profile">
								<Menu.ItemGroup title="Table of content">
									<Menu.Item key="#profile">Profile</Menu.Item>
									<Menu.Item key="#about">About</Menu.Item>
									<Menu.Item key="#educations">Educations</Menu.Item>
									<Menu.Item key="#works" >Works</Menu.Item>
									<Menu.Item key="#skills">Skills</Menu.Item>
									<Menu.Item key="#projects">Projects</Menu.Item>
								</Menu.ItemGroup>
							</SubMenu>
							<Menu.Item key="#blog" disabled>
								<Tooltip placement="bottom" title="Coming soon">
									Blog
								</Tooltip>
							</Menu.Item>
							<Menu.Item key="#contact" >
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
