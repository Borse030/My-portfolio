import React from 'react'
import photo from "./Images/photo.jpg"
const Home = () => {
  return (
    <div className='container'>
      <section className='left-section'>
        <h3> <h1>Hello!</h1> I'm Pankaj Borse,<br />
          a web developer<br />with a good programming knowledge...


        </h3>
      </section >




      <section className='right-section'>
        <img src={photo} alt='photo' />
      </section >

    </div>
  )
}

export default Home
