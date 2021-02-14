import { FC } from 'react'
import Link from 'next/link'

const Header: FC = () => {
  return (
    <header>
      <div className="container">
        <ul className="global-menu font-inter">
          <li className="item">
            <Link href="/csr">
              <a className="link">CSR</a>
            </Link>
          </li>
          <li className="item">
            <Link href="/ssr">
              <a className="link">SSR</a>
            </Link>
          </li>
          <li className="item">
            <Link href="/ssg">
              <a className="link">SSG</a>
            </Link>
          </li>
          <li className="item">
            <Link href="/isr">
              <a className="link">ISR</a>
            </Link>
          </li>
        </ul>
      </div>
      <style jsx>{`
        header {
          background-color: #fff;
          position: fixed;
          width: 100%;
          top: 0;
          left: 0;
          z-index: 1;
          opacity: 0.9;
        }
        .global-menu {
          list-style: none;
          display: flex;
          padding: 0;
        }
        .item {
          margin-right: 20px;
        }
        .link {
          display: inline-block;
          padding: 1px 3px;
        }
      `}</style>
    </header>
  )
}

export default Header
