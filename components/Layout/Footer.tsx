import React, { FC } from 'react'
import { Divider } from 'antd'
import { BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs'
import { useAppContext } from '@hooks/context'

const Footer: FC = () => {
	const context = useAppContext()
	return (
		<div className={`h-[220px] footer ${context.theme == 'dark' ? 'background' : 'background_light'}`}>
			<div className="container w-full h-full">
				<div className="row align-items-center h-full">
					<div className="col-md-4 title-footer">
						<h1>Akiira</h1>
						<h2>Web-developer</h2>
					</div>

					<div className="col-md-4">
						<ul className="ul-footer row justify-content-center gap-2 p-0 mb-0">
							<li className="col-4 w-auto">
								Experience
							</li>
							<li className="col-4 w-auto">
								Skill
							</li>
							<li className="col-4 w-auto">
								Contact
							</li>
						</ul>
					</div>

					<div className="col-md-4">
						<ul className="ul-footer-icon gap-4 mb-0 pl-0">
							<li>
								<BsFacebook className="w-[2rem] h-[2rem]" />
							</li>
							<li>
								<BsLinkedin className="w-[2rem] h-[2rem]" />
							</li>
							<li>
								<BsGithub className="w-[2rem] h-[2rem]" />
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className={`${context.theme == 'dark' ? 'background' : 'background_light'}`}>
				<div className="container">
					<Divider className="" />
				</div>

			</div>
			<p className={`credit text-center ${context.theme == 'dark' ? 'background' : 'background_light text-[#fafafa6e]'}`}>
				Copyright © 2022 Jetniphan Pukkham. All right reserved.
			</p>
		</div>
	)
}

export default Footer
