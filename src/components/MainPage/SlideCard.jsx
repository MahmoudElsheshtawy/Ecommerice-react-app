import React from "react"
import Sdata from "./Sdata"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
// edet
const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }} >{dots}</ul>
    },
  }
  return (
    <>
      <Slider {...settings} >
        {Sdata.map((value) => {
          return (
            <React.Fragment key={value.id}
            >
              <div className='box d_flex top'key={value.id}  >
                <div className='left'>
                  <h1  >{value.title}</h1>
                  <p >{value.desc}</p>
                  <button className='btn-primary'>Visit Collections</button>
                </div>
                <div className='right'>
                  <img src={value.cover} alt='' />
                </div>
              </div>
            </React.Fragment>
          )
        })}
      </Slider>
    </>
  )
}

export default SlideCard
