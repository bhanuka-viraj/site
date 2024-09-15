"use client"
import React from 'react'
import Lottie from 'react-lottie';

const LottlieLoader = (props: any) => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: props.file,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <Lottie options={defaultOptions} height={props.height || 300} width={props.width || 300} />
    </>
  )
}

export default LottlieLoader