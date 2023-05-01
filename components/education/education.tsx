import { useAppContext } from '@hooks/context';
import { Timeline } from 'antd'
import React from 'react'
import { BsLink } from 'react-icons/bs'
import styles from './education.module.css'

export default function Education() {
  const context = useAppContext();

  const education = [
    {
      year: 'Aprill, 2018 - Aprill, 2022',
      name: "King Mongkut's University of Technology Thonburi.",
      major: 'Electronic and Telecommunication Dept.',
      link: 'https://www.kmutt.ac.th/'
    },
    {
      year: '2015 - 2018',
      name: 'Soemngam Witthayakhom School.',
      major: 'Sciences and Mathematics Program.',
      link: 'http://swt.ac.th/'
    },
    {
      year: '2013 - 2015',
      name: 'Soemngam Witthayakhom School.',
      major: 'Junior high school.',
      link: 'http://swt.ac.th/'
    }

  ]
  return (
    <div className={`${styles.education} flex justify-content-center h-100 w-full pt-[70px]`}>
      <Timeline mode='left'>
        {education.map((data, index) => {
          return (
            <Timeline.Item
              label={data.year}
              className={`${styles.education_title} ${context.theme == 'dark' ? 'text-[#fafafa]' : 'text-[#3f3f3f]'}`}
              key={index}>
              <a href={data.link} className=""
                target="_blank"
                rel="noopener noreferrer">
                <h4 className={context.theme == 'dark' ? 'text-[#fafafa]' : 'text-[#3f3f3f]'}>
                  {data.name}
                  <BsLink className="" />
                </h4>
              </a>
              <p className={context.theme == 'dark' ? 'text-[#fafafa6e]' : 'text-[#3f3f3f6e]'}>
                {data.major}
              </p>
            </Timeline.Item>
          )
        })}
      </Timeline>
    </div>
  )
}
