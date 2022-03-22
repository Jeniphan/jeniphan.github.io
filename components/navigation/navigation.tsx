import React from 'react'
import styles from './navigation.module.css'

export default function Navigation() {
  return (
    <div className={`w-[300px] background ${styles.nav}`}>
      <p>Table of content</p>
      <ul>
        <li>Aboutme</li>
        <li>Education</li>
        <li>Experience</li>
        <li>Skill</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}
