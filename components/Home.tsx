import React from 'react'

export default function Home() {
  return (
    <div className="home">
      <div className="hello">
        Hey there! I'm Anderson
        <img src="wave.png" alt="wave" />
        <img src="yellow-heart.png" alt="heart" />
      </div>
      <div className="home-pic">
        <img src="prof2.jpg" alt="" />
      </div>
      <style jsx>
        {`
          .home {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #f5efdf;
            height: auto;
            padding-bottom: 3em;
          }
          .hello {
            text-align: center;
            font-size: 50px;
            font-weight: bold;
            background-color: #1c2321;
            width: 100%;
            margin-bottom: 0.5em;
            padding-top: 0.2em;
          }
          .hello img {
            height: 1.5em;
          }
          .home-pic {
            display: flex;
            justify-content: center;
            width: 70vw;
          }
          .home-pic img {
            height: 65vh;
          }
        `}
      </style>
    </div>
  )
}
