import React, { ReactNode, useEffect, useState } from 'react'
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import * as loadingData from "@components/animation/loading.json";
import { useAppContext } from '@hooks/context';
import styles from './animation.module.css'
import Custom404 from 'pages/404';
import { HttpService } from 'service/api.service';
import router from 'next/router';

export default function Animation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const httpService = new HttpService()

  const context = useAppContext()

  useEffect(() => {
    document.body.classList.add('max-h-screen', 'overflow-hidden')



    setTimeout(() => {
      const url = "api/users/UserInfo?id=532b13b5-3ebb-465d-a29a-2d9036fd2fab"
      httpService.get(url).then((res: any) => {
        if (!res.result) {
          console.log(res);
          setTimeout(() => {
            document.body.classList.remove('max-h-screen', 'overflow-hidden')
            context.setAnimation(true);
          }, 1000);
        }
        else {
          router.push('/404');
          setTimeout(() => {
            document.body.classList.remove('max-h-screen', 'overflow-hidden')
            context.setAnimation(true);
          }, 1000);
        }
      }).catch((err) => {
        router.push('/404');
        setTimeout(() => {
          document.body.classList.remove('max-h-screen', 'overflow-hidden')
          context.setAnimation(true);
        }, 1000);
        console.log("error fetch", err);
      })
    }, 1500);

  }, []);

  return (
    <div className={context.animation ? 'hidden' : 'screen w-full'}>
      {/* <div className="w-full"> */}
      <div className={`${context.theme == 'dark' ? 'background' : styles.background_light} w-full h-[100vh] animation`}>
        <FadeIn className="w-full h-full row items-center m-0">
          <div className="col text-center w-full justify-center">
            <span className={`${context.theme == 'dark' ? styles.name_dark : styles.name} animate__animated animate__bounce p-0`}>
              Akiira
            </span>
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
