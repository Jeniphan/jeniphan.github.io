import React, { FC } from 'react'
import { Divider } from 'antd'

const Footer: FC = () => {
	return (
		<div className="background h-[220px] footer">
			<div className="container w-full h-full">
				<div className="row align-items-center h-full">
					<div className="col-4 title-footer">
						<h1>Akiira</h1>
						<h2>Web-developer</h2>
					</div>

					<div className="col-4">
						<ul className="ul-footer flex justify-content-center gap-4 p-0 mb-0">
							<li>
								Education
							</li>
							<li>
								Experience
							</li>
							<li>
								Skill
							</li>
							<li>
								Contact
							</li>
						</ul>
					</div>

					<div className="col-4 text-end">
						<ul>
							<li>
								facebook
							</li>
							<li>
								Linkin
							</li>
							<li>
								Github
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="background">
				<div className="container">
					<Divider className="" />
				</div>

			</div>
			<p className="credit text-center background">
				Copyright © 2022 Jetniphan Pukkham. All right reserved.
			</p>
		</div>
	)
}

export default Footer
