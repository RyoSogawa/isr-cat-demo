import { NextPage, GetStaticProps } from 'next'
import { fetchRandomImg } from '../lib/api'
import { getNowDatetime } from '../lib/datetime'
import PageTemplate from '../components/PageTemplate'

type PageSsgProps = {
  imgSrc: string
  timePoint: string
}

export const getStaticProps: GetStaticProps = async () => {
  const imgSrc = await fetchRandomImg()

  return {
    props: {
      imgSrc,
      timePoint: getNowDatetime(),
    },
  }
}

const PageSsg: NextPage<PageSsgProps> = ({ imgSrc, timePoint }) => {
  return (
    <PageTemplate
      title="SSG"
      subTitle="static site generation"
      imgSrc={imgSrc}
      timePoint={timePoint}
      whatIs={
        <>
          <p>
            SSGは静的化とも言われる特殊な手法で、ヘッドレスCMSを盛り上げることになった筆頭技術の一つです。
          </p>
          <p>
            ユーザーがアクセスするよりも前に予めAPIを叩き、全ての情報を反映させた静的ファイルを生成します。
          </p>
          <p>
            これにより、ユーザーがアクセスするタイミングでのAPIアクセスが不要となり、高速な遷移が可能になります。
          </p>
          <p>
            ただし、データにリアルタイム性がなく、データ更新の度にそれなりの時間をかけて静的ファイルをビルドし直す必要があるという欠点があります。
          </p>
        </>
      }
      flows={[
        'Next.jsが静的ファイルをビルドする',
        'このタイミングでサーバーは予めAPIを叩いて全情報を取得する',
        '全ページ分の静的ページを生成する',
        'ユーザーがリクエストを送信する',
        'すでに生成されているページが表示される',
      ]}
      goodPoints={[
        '生成済みのHTMLを取得するのでSEOに問題がない',
        '表示/遷移が早い',
      ]}
      badPoints={[
        '表示されるデータがリアルタイムのものではない',
        'データ更新時に再ビルドする必要があり時間がかかる',
      ]}
    />
  )
}

export default PageSsg
