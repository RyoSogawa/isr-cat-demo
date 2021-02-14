import { useState, useEffect } from 'react'
import { NextPage } from 'next'
import { fetchRandomImg } from '../lib/api'
import PageTemplate from '../components/PageTemplate'

const PageCsr: NextPage = () => {
  const [catImgSrc, setCatImgSrc] = useState('')
  const [fetchTimePoint, setFetchTimePoint] = useState('')

  useEffect(() => {
    fetchRandomImg().then(res => {
      setCatImgSrc(res)
      setFetchTimePoint(new Date().toLocaleString())
    })
  }, [])

  return (
    <PageTemplate
      title="CSR"
      subTitle="client side rendering"
      imgSrc={catImgSrc}
      timePoint={fetchTimePoint}
      whatIs={
        <p>
          Client Side
          Renderingではユーザーがページを開いたタイミングでクライアント側からデータを取得しにいきます。
        </p>
      }
      flows={[
        'ユーザーがリクエストを送信する',
        '動的に取得する箇所の中身の入っていないページが返却される',
        'ページ表示後、ブラウザからAPIにアクセスしてデータを取得/表示する',
      ]}
      goodPoints={[
        '遷移早い',
        'リアルタイムでデータを取得するので常に最新の情報が表示される',
      ]}
      badPoints={[
        'データ取得に時間がかかる',
        'SEOに若干不安あり（解決傾向にある）',
      ]}
    />
  )
}

export default PageCsr
