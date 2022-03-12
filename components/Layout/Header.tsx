import { useAppContext } from '@hooks/context';
import React, { FC } from 'react'
import Switch from "react-switch";
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { Menu, Dropdown, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';


const Header: FC = () => {
	const context = useAppContext()
	const [check, setCheck] = React.useState(false);

	const menu = (
		<Menu>
			<Menu.Item>
				<a target="_blank" rel="noopener noreferrer" href="/">
					Proflie
				</a>
			</Menu.Item>
			<Menu.Item>
				<a target="_blank" rel="noopener noreferrer" href="/">
					Block
				</a>
			</Menu.Item>
			<Menu.Item>
				<a target="_blank" rel="noopener noreferrer" href="/">
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

	const toggleSwitch = (checked: boolean) => {
		setCheck(checked);
		checked ? context.setTheme('dark') : context.setTheme('light');
	}
	return (
		<div className="background h-[70px]">
			<div className="header container w-100 h-100 ">
				<div className="row align-items-center h-100 w-100">

					<div className="title-text col-md flex justify-content-between">
						<h1>Akiira</h1>
						<div className="menu col-md">
							<Dropdown overlay={menu} placement="bottomRight" arrow>
								<Button className="botton-menu">
									<MenuOutlined className="icon-menu" />
								</Button>
							</Dropdown>
						</div>
					</div>

					<ul className="ul w-full flex justify-content-center col-md gap-5 ">
						<li>
							Profile
						</li>
						<li>
							Block
						</li>
						<li>
							Contact
						</li>
					</ul>

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
