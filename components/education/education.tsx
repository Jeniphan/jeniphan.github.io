import { useAppContext } from '@hooks/context';
import { Timeline } from 'antd'
import React, { useEffect, useState } from 'react'
import { BsLink } from 'react-icons/bs'
import styles from './education.module.css'
import { IEducation } from '@helper/types';

export default function Education() {
  const context = useAppContext();

  const [education, setEducation] = useState<IEducation[]>([
    {
      EducationId: '1',
      StartDate: 'Aprill, 2018',
      EndDate: 'Aprill, 2022',
      EducationName: "King Mongkut's University of Technology Thonburi.",
      Marjor: 'Electronic and Telecommunication Dept.',
      Link: 'https://www.kmutt.ac.th/'
    },
    {
      EducationId: '2',
      StartDate: '2015',
      EndDate: '2018',
      EducationName: 'Soemngam Witthayakhom School.',
      Marjor: 'Sciences and Mathematics Program.',
      Link: 'http://swt.ac.th/'
    },
    {
      EducationId: '3',
      StartDate: '2013',
      EndDate: '2015',
      EducationName: 'Soemngam Witthayakhom School.',
      Marjor: 'Junior high school.',
      Link: 'http://swt.ac.th/'
    }
  ])


  useEffect(() => {
    if (context.dataAPI) {
      setEducation(context.dataAPI.Educations)
    }
  }, [context.dataAPI])

  return (
    <div className={`${styles.education} flex justify-content-center h-100 w-full pt-[70px]`}>
      <Timeline mode='left'>
        {education.map((data, index) => {
          return (
            <Timeline.Item
              label={`${data.StartDate} - ${data.EndDate}`}
              className={`${styles.education_title} ${context.theme == 'dark' ? 'text-[#fafafa]' : 'text-[#3f3f3f]'}`}
              key={index}>
              <a href={data.Link} className=""
                target="_blank"
                rel="noopener noreferrer">
                <h4 className={context.theme == 'dark' ? 'text-[#fafafa]' : 'text-[#3f3f3f]'}>
                  {data.EducationName}
                  <BsLink className="" />
                </h4>
              </a>
              <p className={context.theme == 'dark' ? 'text-[#fafafa6e]' : 'text-[#3f3f3f6e]'}>
                {data.Marjor}
              </p>
            </Timeline.Item>
          )
        })}
      </Timeline>
    </div>
  )
}
