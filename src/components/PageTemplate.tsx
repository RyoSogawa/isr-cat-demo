import { FC } from 'react'
import Link from 'next/link'

export interface PageTemplateProps {
  title: string
  subTitle: string
  timePoint?: string
  imgSrc?: string
  goodPoints: string[]
  badPoints: string[]
}

const PageTemplate: FC<PageTemplateProps> = ({
  title,
  subTitle,
  timePoint,
  imgSrc,
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
      <h2 className="font-inter">👍 GOOD</h2>
      <ul>
        {goodPoints.map(gp => (
          <li key={gp}>{gp}</li>
        ))}
      </ul>
      <h2 className="font-inter">👎 BAD</h2>
      <ul>
        {badPoints.map(bp => (
          <li key={bp}>{bp}</li>
        ))}
      </ul>
      <Link href="/">
        <a>←TOP</a>
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
          padding-top: 56.25%;
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
        }
      `}</style>
    </div>
  )
}

export default PageTemplate
