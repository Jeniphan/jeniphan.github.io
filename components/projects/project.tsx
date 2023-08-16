import { useAppContext } from '@hooks/context';
import React, { useEffect, useState } from 'react'
import { BsCalendarEvent } from 'react-icons/bs';
import styles from './project.module.css'
import { IProjects } from '@helper/types';

export default function Project() {
  const context = useAppContext();
  const [showMore, setShowMore] = useState(false);

  const [project, setProject] = useState<IProjects[]>([
    {
      Title: 'Project management system',
      Date: 'Nov, 2021s',
      Discription: 'Design and create an software project management system. Design UX/UI from AdobeXD and Coding from Angular Framework and NestJS Framework in BackEnd.',
      Link: '',
      ProjectId: '1'
    },
    {
      Title: 'Monitoring Parameters of Three-Phase Induction Motor Using IoT',
      Date: 'October, 2020s',
      Discription: 'Project Advisor to Monitoring Parameter of Three-Phase Induction Motor Using IOT.',
      Link: 'https://ieeexplore.ieee.org/document/9440368',
      ProjectId: '1'
    },
    {
      Title: 'Hotel management system',
      Date: 'Mar, 2020s',
      Discription: 'Design and create an software hotel management system. Design UX/UI from AdobeXD and Coding from Angular Framework and NodeJS Express in BackEnd.',
      Link: 'https://github.com/Jeniphan/Hotel-management-system-project',
      ProjectId: '1'
    },
    {
      Title: 'Robo Innovator Challenge 2020',
      Date: 'September, 2020s',
      Discription: 'Member of Raidee team to design and create AI car that can self- driving and logistics for join competition by using ESP32 and NVIDIA Jetson Nano.',
      Link: '',
      ProjectId: '1'
    },
    {
      Title: 'Intelligent Parking Project.',
      Date: 'April, 2019s',
      Discription: 'Member of BangMod Maker club to design and create an Intelligent Parking by using CAT Lora borad.',
      Link: '',
      ProjectId: '1'
    },
    {
      Title: '2B-KMUTT #14',
      Date: 'April, 2017s',
      Discription: 'Design and create an Controlling the water system using for Crayfish shrimp farming IOT project by using Arduino and ESP8266.',
      Link: 'https://drive.google.com/file/d/1_jPAFsYiGiDVm1DqAQmevm51PP-3-B4T/view?usp=sharing',
      ProjectId: '1'
    }
  ])

  useEffect(() => {
    if (context.dataAPI) {
      setProject(context.dataAPI.Projects)
    }
  }, [context.dataAPI])

  const Showmore = (check) => {
    setShowMore(!showMore);
  }


  return (
    <div className={`${styles.project} w-full ${showMore ? 'h-auto pb-[100px]' : 'h-auto pb-[100px]'} pt-[70px]  overflow-hidden m-0`}>
      <div className={`text-center ${context.theme == 'dark' ? styles.title_dark : styles.title}`}>
        <h2>
          Projects
        </h2>
        <span>
          My technical projects
        </span>
      </div>

      <div className="projectcontent pt-[50px] w-full">
        <div className={`${styles.contennercard} ${showMore ? 'h-auto' : 'h-[723px] overflow-hidden'} row w-ful gap-y-5 justify-content-center`}>
          {project.map((data, index) => {
            return (
              <div className="col-lg-4" key={index}>
                <div className={`card ${styles.bg__card} ${context.theme == 'dark' ? styles.bg__card__dark : ''}`}>
                  <div className={`card-body`}>
                    <h5 className={`card-title ${styles.titlecard} h-[80px] ${context.theme == 'dark' ? 'text-[#fafafa]' : 'text-[#3f3f3f]'}`}>
                      {data.Title}
                    </h5>
                    <h6 className={`flex align-items-center gap-x-2 card-description ${context.theme == 'dark' ? 'text-[#fafafa6e]' : 'text-[#3f3f3f6e]'}`}>
                      <BsCalendarEvent className="w-[18px] h-[18px]" />
                      {data.Date}
                    </h6>
                    <p className={`card-text h-[150px] overflow-hidden ${context.theme == 'dark' ? 'text-[#fafafa]' : 'text-[#3f3f3f]'}`}>
                      {data.Discription}
                    </p>
                    <a target="_blank" rel="noopener noreferrer" href={data.Link} className={`btn btn-primary ${data.Link == '' ? 'disabled' : ''}`}
                      role="button" aria-disabled='false'>
                      More
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="pt-[20px]">
        <button type="button"
          className="btn btn-primary"
          onClick={(e) => {
            Showmore(e)
            document.querySelector('#projects').scrollIntoView({
              behavior: 'smooth'
            })
          }}>
          {showMore ? 'Hidden' : 'Show more'}
        </button>
      </div>
    </div >
  )
}
