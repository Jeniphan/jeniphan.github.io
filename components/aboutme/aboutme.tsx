import React from 'react'
import styles from './aboutme.module.css'
import { Button, Tag } from 'antd'
import { BsFillArrowDownLeftCircleFill } from 'react-icons/bs'
import { useAppContext } from '@hooks/context';

export default function Aboutme() {
  const text = `Hello. My name is Jetniphan Pukkham, everyone call me Jaay. I'm studying at King Mongkut's University of Technology Thonburi. My major was Electronic and Telecommunication Engineer. I'm interested about Web Development.`;

  const context = useAppContext()
  return (
    <div className={`${styles.about} w-full row justify-content-center h-[100vh] pt-[100px] m-0`}>
      <div className={`text-center ${context.theme == 'dark' ? styles.title_dark : styles.title}`}>
        <h1>Aboutme</h1>
        <p>Personal Profile</p>
      </div>

      <div className="row">
        <div className="col-lg-6 flex justify-content-center">
          <div className={`${styles.img}`}>
            <img src="/aboutme.jpg" alt="about"></img>
          </div>
        </div>

        <div className={`${styles.content} col-lg-6`}>
          <div className={`${context.theme == 'dark' ? styles.header_dark : styles.header} gap-4`}>
            <h1>Jetniphan Pukkham</h1>
            <Tag color="#7868e6">FrontEnd</Tag>
            <Tag color="#7868e6">BackEnd</Tag>
            <Tag color="#7868e6">FullStack</Tag>
          </div>
          <div className={`${context.theme == 'dark' ? styles.text_dark : styles.text} pt-[1rem] leading-relaxed text-[14px]`}>
            <p>{text}</p>
          </div>
          <div className="button w-full flex flex justify-content-center pt-[2rem]">
            <Button className={`${styles.button_text}`} type="primary" shape="round" icon={<BsFillArrowDownLeftCircleFill className="text-[18px]" />}>
              Resume
            </Button>
          </div>
        </div>

      </div>
    </div>
  )
}
