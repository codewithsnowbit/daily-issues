import Head from 'next/head'
import styles from '../styles/Home.module.css'

export async function getServerSideProps(){
  const res = await fetch('http://localhost:3000/api/issues')
  const data = await res.json()

  return { props: {data}}
}

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Daily Issues
        </h1>
        <p>Name: {data.name}</p>       
        <p>Author: {data.author}</p>       
        <p>Labels: {data.labels.join(",")}</p>       
        <p>URL: {data.url}</p>       
      </main>

      <footer className={styles.footer}>
          Powered by Open Source
      </footer>
    </div>
  )
}
