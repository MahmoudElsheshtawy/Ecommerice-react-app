import React from "react"
import './Annocument.css'
const Annocument = () => {
  const mystyle = {
    width: "30%",
    height: "330px",
  }
  const mystyle1 = {
    width: "60%",
    height: "330px",
  }
  return (
    <>
      <section className='annocument background'>
        <div className='container '>
          <div className='img' style={mystyle}>
            <img src='./images/banner-1.png' width='100%' height='100%' />
          </div>
          <div className='img' style={mystyle1}>
            <img src='./images/banner-2.png' width='100%' height='100%' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Annocument
