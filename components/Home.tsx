import React from 'react'

export default function Home() {
  return (
    <div className="home">
      <div className="home-pic">
        <img src="prof2.jpg" alt=""/>
      </div>
      <style jsx>
      {`
        .home {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #D3EFBD;
          height: 75vh;
        }
        .home-pic {
          display: flex;
          justify-content: center;
          width: 70vw;
        }
        .home-pic img{
          height: 65vh;
        }

      `}
      </style>
    </div>
  )
}
