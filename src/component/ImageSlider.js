import React from 'react'
import { SliderData } from './image'

const ImageSlider = () => {
  return (
    <>
    {SliderData.map((slide, index) => {
      return (
        <img src={slide.image} alt='stage image' /> 
      )
    })}
    </>
  )
}

export default ImageSlider