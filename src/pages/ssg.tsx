import { NextPage, GetStaticProps } from 'next'
import { fetchRandomImg } from '../lib/api'
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
      timePoint: new Date().toLocaleString(),
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
      goodPoints={['生成済みのHTMLを取得するのでSEOに問題がない', '遷移が早い']}
      badPoints={[
        '表示されるデータがリアルタイムのものではない',
        'データ更新時に再ビルドする必要があり時間がかかる',
      ]}
    />
  )
}

export default PageSsg
