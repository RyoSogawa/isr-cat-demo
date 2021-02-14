import { FC } from 'react'
const Footer: FC = () => {
  return (
    <footer>
      <div className="container">
        <small>&copy; Ryo Sogawa</small>
        <a
          href="https://github.com/RyoSogawa/isr-cat-demo"
          target="_blank"
          rel="noreferrer noopener"
        >
          GitHub
        </a>
      </div>
      <style jsx>{`
        footer {
          margin-top: 2rem;
          padding: 0.5rem 0;
        }
        small {
          font-size: 11px;
          margin-right: 1rem;
        }
        a {
          font-size: 11px;
        }
      `}</style>
    </footer>
  )
}

export default Footer
