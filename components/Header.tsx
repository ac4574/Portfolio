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
          href="https://github.com/DigitalTranslate/ReactHookify"
          aria-label="LinkedIn"
        >
          <LinkedInIcon fontSize="large" />
        </a>
        <a
          href="https://github.com/DigitalTranslate/ReactHookify"
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
        }
        .header-right {
          display: flex;
          align-items: center;
        }
      `}
      </style>
    </div>
  )
}
