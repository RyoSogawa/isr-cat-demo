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
      whatIs={
        <>
          <p>Incremental Static RegenerationはSSGの拡張版です。</p>
          <p>
            SSGで問題だったデータのリアルタイム性の低さと再ビルドにかかる時間と手間を解決した手法になります。
          </p>
          <p>
            初めにNext.jsビルド時に静的ファイルを生成し、訪れるユーザーにはそのページを表示します。
          </p>
          <p>
            そのタイミングで同時にサーバー側で再度APIを叩き、最新のデータを取得し、それを反映させた静的ファイルを再生成します。
          </p>
          <p>
            差分のみのビルドとなるため短時間で完了し、かつ、運営者側の負担も少ないのが特徴です。
          </p>
          <h3>※本デモの操作について</h3>
          <p>
            もともと表示していたページがキャッシュされるため、スーパーリロードをするとページが再生成されていることが分かるかと思います。
          </p>
          <p>
            再生成の頻度(<code>revalidate</code>
            )は30秒に設定しています。一度再生成してから30秒以上空けないと再生成されません。
          </p>
        </>
      }
      flows={[
        'Next.jsが静的ファイルをビルドする',
        'このタイミングでサーバーは予めAPIを叩いて全情報を取得する',
        '全ページ分の静的ページを生成する',
        'ユーザーがリクエストを送信する',
        'すでに生成されているページが表示され、同時にサーバー側で現在のデータを取得し、対象のページを再ビルドする',
        '次に訪れたユーザーには新しい情報が表示され、再度同時にサーバー側で現在のデータを取得する',
      ]}
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
