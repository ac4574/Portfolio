import React from 'react'
import Link from 'next/link'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <Link href="/">
          <a id="home-button">
            <img src="temp.png" alt="home button" />
          </a>
        </Link>
      </div>
      <div className="header-right">
        <a
          href="https://www.linkedin.com/in/andersonchan4574/"
          aria-label="LinkedIn"
        >
          <LinkedInIcon fontSize="large" />
        </a>
        <a
          href="https://github.com/ac4574"
          aria-label="Github"
        >
          <GitHubIcon fontSize="large" />
        </a>
      </div>
      <style jsx>
      {`
        .header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-left: 30vw;
          margin-right: 30vw;
          margin-top: .5em;
        }
        .header-right {
          display: flex;
          align-items: center;
        }
        #home-button img{
          height: 4em;
        }
        a {
          color: white;
        }
      `}
      </style>
    </div>
  )
}
