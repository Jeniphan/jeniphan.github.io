import React, { useEffect, useState } from 'react'
import styles from './titlecontent.module.css'
import { BsFacebook, BsLinkedin, BsGithub, BsMailbox2 } from 'react-icons/bs'
import { Button } from 'antd';
import Screen from '@components/animation/screen';
import { useAppContext } from '@hooks/context';
import { IContacts, IContent } from '@helper/types';

export default function Titlecontent() {

  const context = useAppContext()
  const [dataContent, setDataContent] = useState<IContent>(null)
  const [dataContact, setDataContact] = useState<IContacts[]>([])

  useEffect(() => {
    if (context.dataAPI) {
      setDataContent(context.dataAPI.Content)
      setDataContact(context.dataAPI.Contacts)
    }
  }, [context.dataAPI])

  useEffect(() => {
    console.log(dataContent);
  }, [dataContent])

  return (
    <div className={`${styles.titlecontent} relative h-[100vh] w-full`}>
      <div className={`${styles.screenanimate} absolute z-[40] bottom-[3rem]`}>
        <Screen />
      </div>
      <div className={`w-full h-full flex items-center`}>
        <div className={`${styles.content} row items-center`}>
          <div className={`col-lg-2 ${styles.ul_icon}`}>
            <ul className={`${styles.ul_icon_content}`}>
              <li className="py-[1rem]">
                <a href={dataContact.find(arg => arg.PlatFormSlug == 'facebook')?.PlatFormLink ?? ""}
                  className={`${context.theme == 'dark' ? "text-[#fafafa6e]" : "text-[#3f3f3f6e]"}`}
                  target="_blank" rel="noopener noreferrer">
                  <BsFacebook className="w-[2rem] h-[2rem]" />
                </a>
              </li >
              <li className="py-[1rem]">
                <a href={dataContact.find(arg => arg.PlatFormSlug == 'linkin')?.PlatFormLink ?? ""}
                  className={`${context.theme == 'dark' ? "text-[#fafafa6e]" : "text-[#3f3f3f6e]"}`}
                  target="_blank" rel="noopener noreferrer">
                  <BsLinkedin className="w-[2rem] h-[2rem]" />
                </a>
              </li>
              <li className="py-[1rem]">
                <a href={dataContact.find(arg => arg.PlatFormSlug == 'github')?.PlatFormLink ?? ""}
                  className={`${context.theme == 'dark' ? "text-[#fafafa6e]" : "text-[#3f3f3f6e]"}`}
                  target="_blank" rel="noopener noreferrer">
                  <BsGithub className="w-[2rem] h-[2rem]" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-5 gap-3">
            <div className={`${styles.title} ${context.theme == 'dark' ? "text-[#fafafa]" : "text-[#3f3f3f]"}`}>
              <span className={`${styles.hi_class} ${context.theme == 'dark' ? "text-[#fafafa]" : "text-[#3f3f3f]"}`}>
                {dataContent?.Title ?? ""}
              </span>
              <h1 className={`${context.theme == 'dark' ? "text-[#fafafa]" : "text-[#3f3f3f]"}`}>
                {dataContent?.Name ?? ""}
              </h1>
              <span className={`${styles.web_class} ${context.theme == 'dark' ? "text-[#fafafa6e]" : "text-[#3f3f3f6e]"}`}>
                {dataContent?.Content ?? ""}
              </span>
              <div className="personal pt-[2rem] leading-relaxed">
                <p>
                  {dataContent?.Skips ?? ""}
                </p>
              </div>
            </div>
            <div className="flex justify-content-center w-full pt-[2rem]">
              <div className={`${styles.button}`}>
                <Button className={`${styles.button_text}`}
                  type="primary" shape="round"
                  icon={<BsMailbox2 className="text-[18px]" />}
                  onClick={() => {
                    document.querySelector('#contact').scrollIntoView({
                      behavior: 'smooth'
                    })
                  }}
                >
                  Contact me
                </Button>
              </div>
            </div>
          </div>
          <div className="col-lg-5 w-full flex justify-content-center">
            <div className={`${styles.img}`}>
              <img src="image/profile.jpg" alt="profile"></img>
            </div>
          </div>
        </div>
      </div>
    </div >

  )
}
