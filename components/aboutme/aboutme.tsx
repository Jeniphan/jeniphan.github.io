import React from 'react'
import styles from './aboutme.module.css'
import { Button, Tag } from 'antd'
import { BsFillArrowDownLeftCircleFill } from 'react-icons/bs'
import { useAppContext } from '@hooks/context';

export default function Aboutme() {
  const text = `Hello. My name is Jetniphan Pukkham, everyone called me Jay. Graduating from King Mongkut's University of Technology Thonburi. Major as Electronic and Telecommunication Engineering. I work as a Full Stack Developer and have been working here for few year now. I’ve always wanted to improve my Coding so I interested about new Technology.`;

  const context = useAppContext()
  return (
    <div className={`${styles.about} w-full row justify-content-center pt-[100px] pb-[100px] m-0`}>
      <div className={`text-center ${context.theme == 'dark' ? styles.title_dark : styles.title}`}>
        <h2>About me</h2>
        <span>Personal Profile</span>
      </div>

      <div className="row gap-y-5">
        <div className="col-lg-6 flex justify-content-center">
          <div className={`${styles.img}`}>
            <img src="image/aboutme.jpg" alt="about"></img>
          </div>
        </div>

        <div className={`${styles.content} col-lg-6`}>
          <div className={`${context.theme == 'dark' ? styles.header_dark : styles.header} gap-4`}>
            <h3>Jetniphan Pukkham</h3>
            <Tag color="blue">Front-End</Tag>
            <Tag color="blue">Back-End</Tag>
            <Tag color="blue">Full Stack</Tag>
          </div>
          <div className={`${context.theme == 'dark' ? styles.text_dark : styles.text} pt-[1rem] leading-relaxed text-[14px]`}>
            <p>{text}</p>
          </div>
          <div className="button w-full flex justify-content-center pt-[2rem]">
            <a href="/resume/resume_Jetniphan.pdf" className="" target="_blank" rel="noopener noreferrer">
              <Button className={`${styles.button_text}`}
                type="primary"
                shape="round"
                icon={<BsFillArrowDownLeftCircleFill
                  className="text-[18px]" />}>
                Resume
              </Button>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
