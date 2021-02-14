import { NextPage, GetStaticProps } from 'next'
import { fetchRandomImg } from '../lib/api'
import PageTemplate from '../components/PageTemplate'

type PageIsrProps = {
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
    revalidate: 30,
  }
}

const PageIsr: NextPage<PageIsrProps> = ({ imgSrc, timePoint }) => {
  return (
    <PageTemplate
      title="ISR"
      subTitle="incremental static regeneration"
      imgSrc={imgSrc}
      timePoint={timePoint}
      goodPoints={[
        '生成済みのHTMLを取得するのでSEOに問題がない',
        '遷移が早い',
        'アクセス時に自動的に変更を検知して再ビルドが走るので、だいたい最新のデータが表示される',
      ]}
      badPoints={[
        '厳密には表示されるデータがリアルタイムのものではない',
        '更新の頻度を上げるとサーバーに負荷がかかる',
      ]}
    />
  )
}

export default PageIsr
