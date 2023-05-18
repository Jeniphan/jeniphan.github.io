import { useAppContext } from '@hooks/context';
import React, { useState } from 'react'
import styles from './skill.module.css'
import { HiBadgeCheck } from "react-icons/hi";
import { Menu } from 'antd';
import Fade from 'react-reveal/Fade';
import { AiOutlineUnorderedList } from 'react-icons/ai';

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
      title: 'CSS & SCSS',
      discription: 'Intermediate'
    },
    {
      title: 'Bootstrap & Tailwind',
      discription: 'Intermediate'
    },
    {
      title: 'Angular Framework',
      discription: 'Intermediate'
    },
    {
      title: 'NextJS Framework',
      discription: 'Intermediate'
    },
    {
      title: 'VueJs Framework',
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
      title: 'Express & Fastify',
      discription: 'Intermediate'
    },
    {
      title: 'NestJS Framework',
      discription: 'Intermediate'
    },
    {
      title: 'MySQL & SQL',
      discription: 'Intermediate'
    },
    {
      title: 'GCP, Nginx, Linux Server',
      discription: 'Intermediate'
    }, ,
    {
      title: 'Firebase',
      discription: 'Basic'
    },
    {
      title: '.Net CORE & Framework',
      discription: 'Intermediate'
    },
  ]

  const embaddeds = [
    {
      title: 'Arduino',
      discription: 'Intermediate'
    },
    {
      title: 'Raspberry Pi',
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
        <h2>
          Skills
        </h2>
        <span>
          My technical level
        </span>
      </div>

      <div className={`${context.theme == 'dark' ? styles.menu_skill_dark : styles.menu_skill_light} mt-[20px]`}>
        <Menu
          onClick={(e) => handleClick(e)}
          selectedKeys={[current]}
          mode="horizontal"
          className="flex justify-content-center"
          theme={context.theme}>
          <Menu.Item key="tech">
            Technical Skills
          </Menu.Item>

          <Menu.Item key="soft">
            Soft skills
          </Menu.Item>
        </Menu>
      </div>

      <div className={`row w-full h-full pb-[150px] ${styles.major_content} m-0 ${checkSkill.current == 'tech' ? '' : styles.check}`}>
        <Fade left when={checkSkill.current == 'tech' ? true : false}>
          <div className="col-lg-4 flex justify-content-center" style={{ 'height': 'unset !important' }}>
            <div className={`${styles.card} w-[270px] m-h-full p-[1rem] rounded-xl drop-shadow-lg ${context.theme == 'dark' ? 'bg-[#064663]' : 'bg-primary'}`}>
              <div className={`${styles.hedder}`}>
                <h3 className="">
                  Front-End Developer
                </h3>
              </div>
              <div className="content_front p-[1rem]">
                {frontend.map((data, index) => {
                  return (
                    <div className="" key={index}>
                      <div className="gap-3 flex">
                        <span>
                          <HiBadgeCheck className="w-[18px] h-[18px]" />
                        </span>
                        <div>
                          <h4 className={`text-[16px] text-[#fafafa]`}>
                            {data.title}
                          </h4>
                          <p className={`text-[#fafafa6e] }`}>
                            {data.discription}
                          </p>
                        </div>
                      </div>

                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="col-lg-4 flex justify-content-center" style={{ 'height': 'unset !important' }}>
            <div className={`${styles.card} w-[270px] m-h-full p-[1rem] rounded-xl drop-shadow-lg ${context.theme == 'dark' ? 'bg-[#064663]' : 'bg-primary'}`}>
              <div className={`${styles.hedder}`}>
                <h3 className="">
                  Back-End Developer
                </h3>
              </div>
              <div className="content_back p-[1rem]">
                {backend.map((data, index) => {
                  return (
                    <div className="" key={index}>
                      <div className='flex gap-3'>
                        <span>
                          <HiBadgeCheck className="w-[18px] h-[18px]" />
                        </span>
                        <div>
                          <h4 className={`text-[16px] text-[#fafafa]`}>
                            {data.title}
                          </h4>
                          <p className={`text-[#fafafa6e]`} >
                            {data.discription}
                          </p>

                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="col-lg-4 flex justify-content-center" style={{ 'height': 'unset !important' }}>
            <div className={`${styles.card} w-[270px] m-h-full ${styles.h__em} p-[1rem] rounded-xl drop-shadow-lg ${context.theme == 'dark' ? 'bg-[#064663]' : 'bg-primary'}`}>
              <div className={`${styles.hedder}`}>
                <h3 className="">Embaddeds and Programing</h3>
              </div>
              <div className="content_embad p-[1rem]">
                {embaddeds.map((data, index) => {
                  return (
                    <div className="" key={index}>
                      <div className="flex gap-3">
                        <span>
                          <HiBadgeCheck className="w-[18px] h-[18px]" />
                        </span>
                        <div>
                          <h4 className={`text-[16px] text-[#fafafa]`}>
                            {data.title}
                          </h4>
                          <p className={`text-[#fafafa6e]`}>
                            {data.discription}
                          </p>

                        </div>
                      </div>
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
            <div className={`w-auto p-[1rem] rounded-xl drop-shadow-lg ${context.theme == 'dark' ? 'bg-[#064663]' : 'bg-primary'}`}>
              <div className={`${styles.hedder}`}>
                <h3 className="">
                  Soft Skills
                </h3>
              </div>
              <div className="content_soft p-[1rem]">
                {softskills.map((data, index) => {
                  return (
                    <div className="" key={index}>
                      <h4 className={`flex align-items-center gap-2 text-[#fafafa] text-[16px]`}>
                        <HiBadgeCheck className="w-[18px] h-[18px]" />
                        {data.title}
                      </h4>
                      <p className={`pl-[1.5rem] text-[#fafafa6e]`}>
                        {data.discription}
                      </p>
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
