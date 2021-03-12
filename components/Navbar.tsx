/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <div className="nav-left">

      </div>
      <style jsx>
        {`
          nav {
            position: fixed;
            top: 0;
            z-index: 10000;
            width: 100%;
            display: flex;
            flex-direction: row;
            background-color: #080808;
            height: 50px;

          }
          .nav-right {
            display: flex;
            color: white;
            align-items: center;
          }
        `}
      </style>
    </nav>
  )
}
