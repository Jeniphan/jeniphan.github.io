import { useAppContext } from '@hooks/context';
import { Timeline } from 'antd'
import React from 'react'
import { BsLink } from 'react-icons/bs'
import styles from './work.module.css'

export default function Work() {
  const context = useAppContext();
  const work = [
    {
      year: 'Jun 1st, 2021 - Nov 30th, 2021',
      name: "TOYOTA TSUSHO DENSO ELECTRONIC(THAILAND)Co.,Ltd.",
      major: 'Software Engineer Intern.',
      link: 'https://www.denso.com/th/th/about-us/company-information/tdet/'
    }
  ]
  return (
    <div className={`${styles.work} flex justify-content-center h-100 w-full pt-[70px]`}>
      <Timeline mode='alternate'>
        {work.map((data, index) => {
          return (
            <Timeline.Item label={data.year} className={`${styles.work_title} ${context.theme == 'dark' ? 'text-[#fafafa]' : 'text-[#3f3f3f]'}`} key={index}>
              <a href={data.link} className="" target="_blank" rel="noopener noreferrer">
                <h4 className={context.theme == 'dark' ? 'text-[#fafafa]' : 'text-[#3f3f3f]'}>{data.name} <BsLink className="" /></h4>
              </a>
              <p className={context.theme == 'dark' ? 'text-[#fafafa6e]' : 'text-[#3f3f3f6e]'}>{data.major}</p>
            </Timeline.Item>
          )
        })}
      </Timeline>
    </div>
  )
}
