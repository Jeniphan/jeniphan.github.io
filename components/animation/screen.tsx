import React, { useEffect } from 'react'
import screenData from './screen.json'
import screenData2 from './screen-light.json'

import Lottie from "react-lottie";
import { useAppContext } from '@hooks/context';
import Link from 'next/link';

export default function Screen() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: screenData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: screenData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const constext = useAppContext()

  // constext.setDataAPI(dataApi)

  return (
    <div
      className="cursor-pointer"
      onClick={
        () => {
          document.querySelector('#about').scrollIntoView({
            behavior: 'smooth'
          })
        }}>
      <Lottie options={constext.theme == 'dark' ? defaultOptions : defaultOptions2} height={200} width={100} />
    </div>
  )
}
