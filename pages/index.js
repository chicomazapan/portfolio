import Head from 'next/head'
import Navbar from '../Components/Navbar'
import styles from 'tailwindcss/tailwind.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Guido Vidaurre Product Designer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <body class="bg-gray-50">

      </body>
    </div>
  )
}
