import { useAppContext } from '@hooks/context';
import React, { FC, useEffect } from 'react'
import Switch from "react-switch";
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { Menu, Dropdown, Button, Tooltip } from 'antd';
import { MenuOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';




const Header: FC = () => {
	const context = useAppContext()
	const [check, setCheck] = React.useState(false);
	const [page, setPage] = React.useState({ current: 'profile' })

	const handleClick = e => {
		console.log('click ', e);
		setPage({ current: e.key });
	};

	const { current } = page;
	const { SubMenu } = Menu;

	const toggleSwitch = (checked: boolean) => {
		setCheck(checked);
		checked ? context.setTheme('light') : context.setTheme('dark');
		localStorage.setItem('theme', checked ? 'light' : 'dark')
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
			<Menu.Item >
				<a target="_blank" rel="noopener noreferrer" href="/" className="list-menu">
					Proflie
				</a>
			</Menu.Item>
			<Menu.Item>
				<a target="_blank" rel="noopener noreferrer" href="/" className="list-menu">
					Block
				</a>
			</Menu.Item>
			<Menu.Item>
				<a target="_blank" rel="noopener noreferrer" href="/" className="list-menu">
					Contact
				</a>
			</Menu.Item>
			<Menu.Item>
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
		<div className={`fixed z-[50] h-[70px] w-full ${context.theme == 'dark' ? 'background' : 'background_light'}`}>
			<div className="header container w-100 h-100 ">
				<div className="row align-items-center h-100 w-100">

					<div className="title-text col-md flex justify-content-between">
						<h1>Akiira</h1>
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
									<Menu.Item key="setting:1">Aboutme</Menu.Item>
									<Menu.Item key="setting:2">Education</Menu.Item>
									<Menu.Item key="setting:3">Work</Menu.Item>
									<Menu.Item key="setting:4">Skill</Menu.Item>
									<Menu.Item key="setting:5">Contactme</Menu.Item>
								</Menu.ItemGroup>
							</SubMenu>
							<Menu.Item key="block">
								<Tooltip placement="bottom" title="Coming soon">
									Block
								</Tooltip>
							</Menu.Item>
							<Menu.Item key="Contact" >
								Contactme
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
