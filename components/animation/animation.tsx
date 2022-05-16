import React, { ReactNode, useEffect, useState } from 'react'
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import * as loadingData from "@components/animation/loading.json";
import { useAppContext } from '@hooks/context';
import styles from './animation.module.css'

export default function Animation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const context = useAppContext()

  useEffect(() => {
    document.body.classList.add('max-h-screen', 'overflow-hidden')
    setTimeout(() => {
      setTimeout(() => {
        document.body.classList.remove('max-h-screen', 'overflow-hidden')
        context.setAnimation(true);
      }, 1000);
    }, 1500);

  }, []);

  return (
    <div className={context.animation ? 'hidden' : 'screen w-full'}>
      {/* <div className="w-full"> */}
      <div className={`${context.theme == 'dark' ? 'background' : styles.background_light} w-full h-[100vh] animation`}>
        <FadeIn className="w-full h-full row items-center m-0">
          <div className="col text-center w-full justify-center">
            <h1 className={`${context.theme == 'dark' ? styles.name_dark : styles.name} animate__animated animate__bounce p-0`}>
              Akiira
            </h1>
            <div className="w-full flex justify-content-center">
              <div className={`w-[414px] ${styles.lottie}`}>
                <Lottie options={defaultOptions} height={50} />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
