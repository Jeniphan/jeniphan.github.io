import { useAppContext } from '@hooks/context';
import { Timeline } from 'antd'
import React, { useEffect, useState } from 'react'
import { BsLink } from 'react-icons/bs'
import styles from './work.module.css'
import { IWork } from '@helper/types';

export default function Work() {
  const context = useAppContext();

  const [work, setWork] = useState<IWork[]>([
    {
      id: '1',
      start: 'Sep 6th, 2022',
      end: 'Present',
      name: "Logicton Co.,Ltd.",
      marjor: 'Full Stack Developer.',
      link: 'https://logicton.com/',
      order: 0
    },
    {
      id: '2',
      start: 'May 30th, 2022',
      end: 'Sep 5th, 2022',
      name: "KARNKANOK PROPERTY COMPANY Limited.",
      marjor: 'Front End Developer.',
      link: 'https://www.kkn.co.th',
      order: 1
    },
    {
      id: '3',
      start: 'Jun 1st, 2021',
      end: 'Nov 30th, 2021',
      name: "TOYOTA TSUSHO DENSO ELECTRONIC(THAILAND)Co.,Ltd.",
      marjor: 'Software Engineer Intern.',
      link: 'https://www.denso.com/th/th/about-us/company-information/tdet/',
      order: 2
    },
  ])

  useEffect(() => {
    if (context.dataAPI) {
      setWork(context.dataAPI.Works)
    }
  }, [context.dataAPI])

  return (
    <div className={`${styles.work} flex justify-content-center h-100 w-full pt-[70px]`}>
      <Timeline mode='left'>
        {work.map((data, index) => {
          return (
            <Timeline.Item label={`${data.start} - ${data.end}`} className={`${styles.work_title} ${context.theme == 'dark' ? 'text-[#fafafa]' : 'text-[#3f3f3f]'}`} key={index}>
              <a href={data.link} className="" target="_blank" rel="noopener noreferrer">
                <h4 className={context.theme == 'dark' ? 'text-[#fafafa]' : 'text-[#3f3f3f]'}>{data.name} <BsLink className="" /></h4>
              </a>
              <p className={context.theme == 'dark' ? 'text-[#fafafa6e]' : 'text-[#3f3f3f6e]'}>{data.marjor}</p>
            </Timeline.Item>
          )
        })}
      </Timeline>
    </div>
  )
}
