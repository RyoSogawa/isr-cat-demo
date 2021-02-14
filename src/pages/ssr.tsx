import { NextPage, GetServerSideProps } from 'next'
import { fetchRandomImg } from '../lib/api'
import PageTemplate from '../components/PageTemplate'

type PageSsrProps = {
  imgSrc: string
  timePoint: string
}

export const getServerSideProps: GetServerSideProps = async () => {
  const imgSrc = await fetchRandomImg()

  return {
    props: {
      imgSrc,
      timePoint: new Date().toLocaleString(),
    },
  }
}

const PageSsr: NextPage<PageSsrProps> = ({ imgSrc, timePoint }) => {
  return (
    <PageTemplate
      title="SSR"
      subTitle="server side rendering"
      imgSrc={imgSrc}
      timePoint={timePoint}
      goodPoints={[
        '生成済みのHTMLを取得するのでSEOに問題がない',
        'リアルタイムでデータを取得するので常に最新の情報が表示される',
      ]}
      badPoints={['データ取得に時間がかかる', '画面遷移も時間がかかる']}
    />
  )
}

export default PageSsr
