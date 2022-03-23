import { useAppContext } from '@hooks/context';
import React, { useState } from 'react'
import styles from './skill.module.css'
import { HiBadgeCheck } from "react-icons/hi";
import { Menu } from 'antd';
import Fade from 'react-reveal/Fade';


export default function Skill() {
  const context = useAppContext();
  const [checkSkill, setCheckSkill] = useState({ current: 'tech' })
  const { current } = checkSkill;

  const frontend = [
    {
      title: 'JavaScript',
      discription: 'Intermediate'
    },
    {
      title: 'TypeScript',
      discription: 'Intermediate'
    },
    {
      title: 'html',
      discription: 'Intermediate'
    },
    {
      title: 'CSS',
      discription: 'Intermediate'
    },
    {
      title: 'Bootstrap',
      discription: 'Intermediate'
    },
    {
      title: 'Angular Framwork',
      discription: 'Intermediate'
    },
    {
      title: 'NextJS Framwork',
      discription: 'Intermediate'
    }
  ]

  const backend = [
    {
      title: 'NodeJS',
      discription: 'Intermediate'
    },
    {
      title: 'TypeScript',
      discription: 'Intermediate'
    },
    {
      title: 'Express',
      discription: 'Intermediate'
    },
    {
      title: 'NestJS Framwork',
      discription: 'Intermediate'
    },
    {
      title: 'MySQL',
      discription: 'Intermediate'
    },
    {
      title: 'GCP',
      discription: 'Basic'
    }, ,
    {
      title: 'Firebase',
      discription: 'Basic'
    },
  ]

  const embaddeds = [
    {
      title: 'Arduino',
      discription: 'Intermediate'
    },
    {
      title: 'Respberry Pi',
      discription: 'Intermediate'
    },
    {
      title: 'ESP32 & CatLoRa',
      discription: 'Basic'
    },
    {
      title: 'MIPs Assembly',
      discription: 'Basic'
    },
    {
      title: 'C++',
      discription: 'Basic'
    },
    ,
    {
      title: 'Python',
      discription: 'Basic'
    },
  ]

  const softskills = [
    {
      title: 'Time Management',
      discription: 'Intermediate'
    },
    {
      title: 'Teamwork and Collaboration',
      discription: 'Intermediate'
    },
    {
      title: 'Complex Problem Solving',
      discription: 'Intermediate'
    },
    {
      title: 'Communication skills',
      discription: 'Intermediate'
    },
    {
      title: 'Flexibility and Adaptability',
      discription: 'Intermediate'
    },
    {
      title: 'Leadership',
      discription: 'Intermediate'
    },
  ]

  const handleClick = (e) => {
    console.log('click ', e);
    setCheckSkill({ current: e.key });
  };

  return (
    <div className={`${styles.skill} w-full h-[100vh] pt-[70px] m-0 overflow-hidden`}>
      <div className={`text-center ${context.theme == 'dark' ? styles.title_dark : styles.title}`}>
        <h1>Skills</h1>
        <p>My technical level</p>
      </div>

      <div className={`${context.theme == 'dark' ? styles.menu_skill_dark : styles.menu_skill_light} mt-[20px]`}>
        <Menu
          onClick={(e) => handleClick(e)}
          selectedKeys={[current]}
          mode="horizontal"
          className="flex justify-content-center">
          <Menu.Item key="tech">
            Technical Skills
          </Menu.Item>

          <Menu.Item key="soft">
            Soft skills
          </Menu.Item>
        </Menu>
      </div>

      <div className={`row w-full ${styles.major_content} m-0 ${checkSkill.current == 'tech' ? '' : styles.check}`}>
        <Fade left when={checkSkill.current == 'tech' ? true : false}>
          <div className="col-lg-4 flex justify-content-center">
            <div className={`w-[270px] p-[1rem] rounded-xl drop-shadow-lg ${context.theme == 'dark' ? 'bg-[#064663]' : 'bg-[#B8B5FF]'}`}>
              <div className={`${context.theme == 'dark' ? styles.hedder : styles.hedder_light}`}>
                <h4 className="">FrontEnd Developer</h4>
              </div>
              <div className="content_front p-[1rem]">
                {frontend.map((data, index) => {
                  return (
                    <div className="" key={index}>
                      <h6 className={`flex align-items-center gap-2 ${context.theme == 'dark' ? 'text-[#fafafa]' : 'text-[#3f3f3f]'}`}> <HiBadgeCheck className="w-[18px] h-[18px]" /> {data.title} </h6>
                      <p className={`pl-[1.5rem] text-[#fafafa6e] ${context.theme == 'dark' ? 'text-[#fafafa6e]' : 'text-[#3f3f3f6e]'}`}>{data.discription}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="col-lg-4 flex justify-content-center">
            <div className={`w-[270px] p-[1rem] rounded-xl drop-shadow-lg ${context.theme == 'dark' ? 'bg-[#064663]' : 'bg-[#B8B5FF]'}`}>
              <div className={`${context.theme == 'dark' ? styles.hedder : styles.hedder_light}`}>
                <h4 className="">BackEnd Developer</h4>
              </div>
              <div className="content_back p-[1rem]">
                {backend.map((data, index) => {
                  return (
                    <div className="" key={index}>
                      <h6 className={`flex align-items-center gap-2 ${context.theme == 'dark' ? 'text-[#fafafa]' : 'text-[#3f3f3f]'}`}> <HiBadgeCheck className="w-[18px] h-[18px]" /> {data.title} </h6>
                      <p className={`pl-[1.5rem] ${context.theme == 'dark' ? 'text-[#fafafa6e]' : 'text-[#3f3f3f6e]'}`} >{data.discription}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="col-lg-4 flex justify-content-center">
            <div className={`w-[270px] h-[536px] p-[1rem] rounded-xl drop-shadow-lg ${context.theme == 'dark' ? 'bg-[#064663]' : 'bg-[#B8B5FF]'}`}>
              <div className={`${context.theme == 'dark' ? styles.hedder : styles.hedder_light}`}>
                <h4 className="">Embaddeds and Programing</h4>
              </div>
              <div className="content_embad p-[1rem]">
                {embaddeds.map((data, index) => {
                  return (
                    <div className="" key={index}>
                      <h6 className={`flex align-items-center gap-2 ${context.theme == 'dark' ? 'text-[#fafafa]' : 'text-[#3f3f3f]'}`}> <HiBadgeCheck className="w-[18px] h-[18px]" /> {data.title} </h6>
                      <p className={`pl-[1.5rem] ${context.theme == 'dark' ? 'text-[#fafafa6e]' : 'text-[#3f3f3f6e]'}`}>{data.discription}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>

      <div className={`${checkSkill.current == 'tech' ? styles.check : ''} row w-full ${styles.major_content} m-0`}>
        <Fade right when={checkSkill.current == 'soft' ? true : false}>
          <div className="col-lg flex justify-content-center">
            <div className={`w-auto p-[1rem] rounded-xl drop-shadow-lg ${context.theme == 'dark' ? 'bg-[#064663]' : 'bg-[#B8B5FF]'}`}>
              <div className={`${context.theme == 'dark' ? styles.hedder : styles.hedder_light}`}>
                <h4 className="">Soft Skills</h4>
              </div>
              <div className="content_soft p-[1rem]">
                {softskills.map((data, index) => {
                  return (
                    <div className="" key={index}>
                      <h6 className={`flex align-items-center gap-2 ${context.theme == 'dark' ? 'text-[#fafafa]' : 'text-[#3f3f3f]'}`}> <HiBadgeCheck className="w-[18px] h-[18px]" /> {data.title} </h6>
                      <p className={`pl-[1.5rem] ${context.theme == 'dark' ? 'text-[#fafafa6e]' : 'text-[#3f3f3f6e]'}`}>{data.discription}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </Fade>

      </div>
    </div>
  )
}
