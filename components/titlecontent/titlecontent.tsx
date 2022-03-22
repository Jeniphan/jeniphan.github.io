import React from 'react'
import styles from './titlecontent.module.css'
import { BsFacebook, BsLinkedin, BsGithub, BsMailbox2 } from 'react-icons/bs'
import { Button } from 'antd';
import Screen from '@components/animation/screen';
import { useAppContext } from '@hooks/context';


export default function Titlecontent() {

  const context = useAppContext()
  return (
    <div className={`${styles.titlecontent} relative h-[100vh] w-full`}>
      <div className={`${styles.screenanimate} absolute z-[40] bottom-[3rem]`}>
        <Screen />
      </div>
      <div className={`w-full h-full flex items-center`}>
        <div className={`${styles.content} row items-center`}>
          <div className={`col-lg-2 ${styles.ul_icon}`}>
            <ul className={`${styles.ul_icon_content} ${context.theme == 'dark' ? "text-[#fafafa6e]" : "text-[#3f3f3f6e]"}`}>
              <li className="py-[1rem]">
                <BsFacebook className="w-[2rem] h-[2rem]" />
              </li >
              <li className="py-[1rem]">
                <BsLinkedin className="w-[2rem] h-[2rem]" />
              </li>
              <li className="py-[1rem]">
                <BsGithub className="w-[2rem] h-[2rem]" />
              </li>
            </ul>
          </div>
          <div className="col-lg-5 gap-3">
            <div className={`${styles.title} ${context.theme == 'dark' ? "text-[#fafafa]" : "text-[#3f3f3f]"}`}>
              <h1 className={`${context.theme == 'dark' ? "text-[#fafafa]" : "text-[#3f3f3f]"}`}>Hi&apos; I am</h1>
              <h2 className={`${context.theme == 'dark' ? "text-[#fafafa]" : "text-[#3f3f3f]"}`}>Jetniphan Pukkham</h2>
              <h3 className={`${context.theme == 'dark' ? "text-[#fafafa6e]" : "text-[#3f3f3f6e]"}`}>Web Developer</h3>
              <div className="personal pt-[2rem] leading-relaxed">
                <span>Web Developer with hands-on experience in JavaScript, TypeScript, html, CSS, Angular Framework, NextJS. And also experience in Back-End Developer such as Nodejs, Express, NestJS Framework, GCP, and others.</span>
              </div>
            </div>
            <div className="flex justify-content-center w-full pt-[2rem]">
              <div className={`${styles.button}`}>
                <Button className={`${styles.button_text}`} type="primary" shape="round" icon={<BsMailbox2 className="text-[18px]" />}>
                  Contactme
                </Button>
              </div>
            </div>
          </div>
          <div className="col-lg-5 w-full flex justify-content-center">
            <div className={`${styles.img}`}>
              <img src="/IMG_4099.jpg" alt="profile"></img>
            </div>
          </div>
        </div>
      </div>
    </div >

  )
}
