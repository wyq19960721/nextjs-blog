import Head from 'next/head'
import utilStyles from './../styles/utils.module.css'
import Layout, { siteTitle } from './../components/layout'
import { getSortedPostsData } from './../lib/posts'
import Link from 'next/link'
import Date from './../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  console.log(allPostsData, 'allPostsData')
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Wang</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://www.nextjs.cn/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {
            allPostsData.map(({ id, date, title }) => {
              return (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date}></Date>
                  </small>
                </li>
              )
            })
          }
        </ul>
      </section>
    </Layout>
  )
}
