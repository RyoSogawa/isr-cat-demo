import { FC } from 'react'
import Link from 'next/link'

export interface PageTemplateProps {
  title: string
  subTitle: string
  timePoint?: string
  imgSrc?: string
  whatIs: JSX.Element
  flows: string[]
  goodPoints: string[]
  badPoints: string[]
}

const PageTemplate: FC<PageTemplateProps> = ({
  title,
  subTitle,
  timePoint,
  imgSrc,
  whatIs,
  flows,
  goodPoints,
  badPoints,
}) => {
  return (
    <div className="container">
      <div className="cat-img-wrapper">
        {imgSrc && <img src={imgSrc} alt="猫画像" className="cat-img" />}
      </div>
      {timePoint && (
        <span className="font-inter time-point">{timePoint}にデータ取得</span>
      )}
      <h1 className="font-inter">
        {title}
        <span className="font-inter sub-title">{subTitle}</span>
      </h1>
      <h2 className="font-inter">🐈 WHAT IS {title}?</h2>
      <div>{whatIs}</div>
      <h2 className="font-inter">🌊 DATA FLOW</h2>
      <ol>
        {flows.map(f => (
          <li key={title + f} className="item">
            {f}
          </li>
        ))}
      </ol>
      <h2 className="font-inter">👍 GOOD</h2>
      <ul>
        {goodPoints.map(gp => (
          <li key={title + gp} className="item">
            {gp}
          </li>
        ))}
      </ul>
      <h2 className="font-inter">👎 BAD</h2>
      <ul>
        {badPoints.map(bp => (
          <li key={title + bp} className="item">
            {bp}
          </li>
        ))}
      </ul>
      <Link href="/">
        <a className="font-inter to-top">←TOP</a>
      </Link>
      <style jsx>{`
        .sub-title {
          display: block;
          font-size: 15px;
          text-transform: capitalize;
        }

        .time-point {
          display: block;
          font-size: 13px;
        }

        .cat-img-wrapper {
          position: relative;
          height: 0;
          padding-top: 100%;
          overflow: hidden;
        }

        .cat-img {
          position: absolute;
          min-width: 100%;
          min-height: 100%;
          object-fit: cover;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: #efd6d5;
        }

        .item + li {
          margin-top: 0.5rem;
        }

        .to-top {
          display: inline-block;
          margin-top: 3rem;
        }
      `}</style>
    </div>
  )
}

export default PageTemplate
