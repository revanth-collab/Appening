import Slider from 'react-slick'

import { IoIosArrowRoundForward } from "react-icons/io";

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


import './index.css'

const ReactSlick = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className='mental-health'>
          <div className='mental-content'>
            <h1 className='mental-heading'>NEED A MENTAL HEALTH PROVIDER</h1>
            <p className='mental-para'>No Look Further</p>
            <p className='mental-para'>Our goal is to provide a safe, comfortable, and warm environment so that you can openly discuss your mental health needs.</p>
            <button type="button" className='mental-button'>Learn More <span><IoIosArrowRoundForward className='mini'/></span></button>
          </div>
        </div>
        <div className='mental-health'>
          <div className='mental-content'>
            <h1 className='mental-heading'>NEED A MENTAL HEALTH PROVIDER</h1>
            <p className='mental-para'>No Look Further</p>
            <p className='mental-para'>Our goal is to provide a safe, comfortable, and warm environment so that you can openly discuss your mental health needs.</p>
            <button type="button" className='mental-button'>Learn More <span><IoIosArrowRoundForward className='mini'/></span></button>
          </div>
        </div>
        <div className='mental-health'>
          <div className='mental-content'>
            <h1 className='mental-heading'>NEED A MENTAL HEALTH PROVIDER</h1>
            <p className='mental-para'>No Look Further</p>
            <p className='mental-para'>Our goal is to provide a safe, comfortable, and warm environment so that you can openly discuss your mental health needs.</p>
            <button type="button" className='mental-button'>Learn More <span><IoIosArrowRoundForward className='mini'/></span></button>
          </div>
        </div>
        <div className='mental-health'>
          <div className='mental-content'>
            <h1 className='mental-heading'>NEED A MENTAL HEALTH PROVIDER</h1>
            <p className='mental-para'>No Look Further</p>
            <p className='mental-para'>Our goal is to provide a safe, comfortable, and warm environment so that you can openly discuss your mental health needs.</p>
            <button type="button" className='mental-button'>Learn More <span><IoIosArrowRoundForward className='mini'/></span></button>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default ReactSlick