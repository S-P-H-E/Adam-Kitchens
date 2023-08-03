import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Head from 'next/head';

export default function Home(){
  const name = "Adams Kitchens"
  const hero = "Lose 20 lbs in 12 weeks. Guaranteed!"

  return(
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content={hero} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero name={name} title={hero}/>
    </>
  )
}