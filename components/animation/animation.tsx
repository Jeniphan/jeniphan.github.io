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
    setTimeout(() => {
      setTimeout(() => {
        context.setAnimation(true);
      }, 1000);
    }, 1500);
  }, []);

  return (
    <div className={context.animation ? 'hidden' : 'screen w-full'}>
      <div className={`${context.theme == 'dark' ? 'background' : styles.background_light} w-full h-[100vh] animation`}>
        <FadeIn className="w-full h-full row items-center">
          <div className="col text-center w-full">
            <h1 className={`${context.theme == 'dark' ? styles.name_dark : styles.name} animate__animated animate__bounce`}>Akiira</h1>
            <Lottie options={defaultOptions} height={50} width={414} className="w-full" />
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
