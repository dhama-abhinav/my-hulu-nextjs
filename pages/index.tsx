import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Header} from '../components/Header'
import {Navbar} from '../components/Navbar'
import {Results} from '../components/Results'
import requests from '../util/requests'

const Home: NextPage = ({results}:any) => {
console.log(results)
  return (
    <div className="">
      <Head>
        <title>Hulu-2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Navbar />
      <Results results={results}  />
    </div>
  )
}

export default Home

export async function getServerSideProps(context:any){
  const  genre:any = context.query.genre

  const request:any = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`
        )
      .then(res => res.json())

      return {
        props : {
          results: request.results
        }
      }
}

