import React, { FC } from 'react'
import styles from './Input.module.css'

const Input: FC = () => {
	return (
		<>
			<input
				type="text"
				className={`${styles.customInput} p-4 outline-none block`}
			/>
		</>
	)
}

export default Input
