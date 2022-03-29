import React, { FC } from 'react'
import { Divider } from 'antd'
import { BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs'
import { useAppContext } from '@hooks/context'
import Link from 'next/link'

const Footer: FC = () => {
	const context = useAppContext()
	return (
		<div className={`h-[220px] footer ${context.theme == 'dark' ? 'background' : 'bg-primary'}`}>
			<div className="container w-full h-full">
				<div className="row align-items-center h-full">
					<div className="col-md-4 title-footer">
						<h1>Akiira</h1>
						<h2>Web-developer</h2>
					</div>

					<div className="col-md-4">
						<ul className="ul-footer row justify-content-center gap-2 p-0 mb-0">
							<li className="col-4 w-auto cursor-pointer" onClick={
								() => {
									document.querySelector('#about').scrollIntoView({
										behavior: 'smooth'
									})
								}}>
								About
							</li>
							<li className="col-4 w-auto cursor-pointer" onClick={
								() => {
									document.querySelector('#skills').scrollIntoView({
										behavior: 'smooth'
									})
								}}>
								Skills
							</li>
							<li className="col-4 w-auto cursor-pointer" onClick={
								() => {
									document.querySelector('#contact').scrollIntoView({
										behavior: 'smooth'
									})
								}}>
								Contact
							</li>
						</ul>
					</div>

					<div className="col-md-4">
						<ul className="ul-footer-icon gap-4 mb-0 pl-0">
							<li>
								<a href="https://www.facebook.com/jeniphan.pukkham/" className="" target="_blank" rel="noopener noreferrer">
									<BsFacebook className="w-[2rem] h-[2rem] text-[#fafafa]" />
								</a>
							</li>
							<li>
								<a href="https://www.linkedin.com/in/jetniphan-pukkham-957671212/" className="" target="_blank" rel="noopener noreferrer">
									<BsLinkedin className="w-[2rem] h-[2rem] text-[#fafafa]" />
								</a>
							</li>
							<li>
								<a href="https://github.com/Jeniphan" className="" target="_blank" rel="noopener noreferrer">
									<BsGithub className="w-[2rem] h-[2rem] text-[#fafafa]" />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className={`${context.theme == 'dark' ? 'background' : 'bg-primary'}`}>
				<div className="container">
					<Divider className="" />
				</div>
			</div>
			<p className={`credit text-center ${context.theme == 'dark' ? 'background' : 'bg-primary text-[#fafafa]'}`}>
				Copyright © 2022 Jetniphan Pukkham. All right reserved.
			</p>
		</div>
	)
}

export default Footer
