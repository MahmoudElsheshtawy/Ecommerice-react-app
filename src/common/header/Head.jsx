import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left'>
        <div className="phone">
        <i className='fa fa-phone'></i>
            <label> +02 01067870535</label>
        </div>
           <div className="gmail">
           <i className='fa fa-envelope'></i>
            <label> elsheshatwym54@gmail.com</label>
           </div>
          </div>
          <div className='right'>
            <label>Theme FAQ"s</label>
            <label>Need Help?</label>
            {/* <span>🏳️‍⚧️</span>
            <label>EN</label>
            <span>🏳️‍⚧️</span> */}
            <label>USD</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
