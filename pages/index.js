import Head from 'next/head';
import Link from 'next/link';
import { IndexWrapper, Text } from "../styles/indexStyles";
import Image from 'next/image';
import logoind from "../public/images/LogoAC.png"

export default function Home() {
  return (
    <>
      <Head>
        <title>Adèle CARLES</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <IndexWrapper>
          <Link className="linkInd" href={"/missions"}>
            <Image className="imgInd" src={logoind} alt="logo" />
          </Link>
          <Text className="textInd">
            <h1>AVOCAT AU BARREAU DE BORDEAUX</h1>
          </Text>
        </IndexWrapper>
      </main>
    </>
  )
}
