import { useAppContext } from '@hooks/context';
import React, { useState } from 'react'
import { BsCalendarEvent } from 'react-icons/bs';
import styles from './project.module.css'

export default function Project() {
  const context = useAppContext();
  const [showMore, setShowMore] = useState(false);

  const Showmore = (check) => {
    setShowMore(!showMore);
  }

  const project = [
    {
      title: 'Project management system',
      date: 'Nov, 2021s',
      discription: 'Design and create an software project management system. Design UX/UI from AdobeXD and Coding from Angular Framework and NestJS Framework in BackEnd.',
      link: ''
    },
    {
      title: 'Monitoring Parameters of Three-Phase Induction Motor Using IoT',
      date: 'October, 2020s',
      discription: 'Project Advisor to Monitoring Parameter of Three-Phase Induction Motor Using IOT.',
      link: 'https://ieeexplore.ieee.org/document/9440368'
    },
    {
      title: 'Hotel management system',
      date: 'Mar, 2020s',
      discription: 'Design and create an software hotel management system. Design UX/UI from AdobeXD and Coding from Angular Framework and NodeJS Express in BackEnd.',
      link: 'https://github.com/Jeniphan/Hotel-management-system-project'
    },
    {
      title: 'Robo Innovator Challenge 2020',
      date: 'September, 2020s',
      discription: 'Member of Raidee team to design and create AI car that can self- driving and logistics for join competition by using ESP32 and NVIDIA Jetson Nano.',
      link: ''
    },
    {
      title: 'Intelligent Parking Project.',
      date: 'April, 2019s',
      discription: 'Member of BangMod Maker club to design and create an Intelligent Parking by using CAT Lora borad.',
      link: ''
    },
    {
      title: '2B-KMUTT #14',
      date: 'April, 2017s',
      discription: 'Design and create an Controlling the water system using for Crayfish shrimp farming IOT project by using Arduino and ESP8266.',
      link: 'https://drive.google.com/file/d/1_jPAFsYiGiDVm1DqAQmevm51PP-3-B4T/view?usp=sharing'
    }
  ]
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
                      {data.title}
                    </h5>
                    <h6 className={`flex align-items-center gap-x-2 card-description ${context.theme == 'dark' ? 'text-[#fafafa6e]' : 'text-[#3f3f3f6e]'}`}>
                      <BsCalendarEvent className="w-[18px] h-[18px]" />
                      {data.date}
                    </h6>
                    <p className={`card-text h-[150px] overflow-hidden ${context.theme == 'dark' ? 'text-[#fafafa]' : 'text-[#3f3f3f]'}`}>
                      {data.discription}
                    </p>
                    <a target="_blank" rel="noopener noreferrer" href={data.link} className={`btn btn-primary ${data.link == '' ? 'disabled' : ''}`}
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
