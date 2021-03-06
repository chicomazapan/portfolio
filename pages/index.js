import Head from 'next/head'
import styles from 'tailwindcss/tailwind.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Guido Vidaurre Product Designer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <div className="pt-10 bg-gray-900 h-95v sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 ">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div className="lg:py-24">
                <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block">Website</span>
                  <span className="block text-indigo-400">Under Construction</span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                In a few weeks I will publish my portfolio with all the projects, ideas and experience gathered during my growth process, I hope you like it.
                </p>
              </div>
            </div>
            <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                <img className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="/under construction.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>

    {/*<!-- More main page content here... -->*/}
    </main>
    </div>
  )
}
