import { NextPage } from 'next'

const PageIndex: NextPage = () => {
  return (
    <div className="container">
      <h1 className="font-inter">isr-cat-demo</h1>
      <p>
        このサイトは
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer noopener">
          Next.js
        </a>
        を使って
        <ul className="font-inter">
          <li>CSR</li>
          <li>SSR</li>
          <li>SSG</li>
          <li>ISR</li>
        </ul>
        の挙動の違いを体感するために作られました。
      </p>

      <ol>
        <li>APIを使ってランダムに猫画像を取得</li>
        <li>画像を取得した日時を表示</li>
      </ol>
      <p>の２種類の動作に違いが見られるかと思います。</p>
    </div>
  )
}

export default PageIndex
