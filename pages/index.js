import Head from 'next/head'
import Link from 'next/link'
import {
  IndexWrapper,
  TextWrapper,
  Letters,
  LetterA,
  LetterC,
  Line1,
  Line2,
} from '../styles/indexStyles'
import { motion } from 'framer-motion'
import {
  pageAnimation,
  letterA,
  letterC,
  avocatAnim,
  avocat2Anim,
  lineIndex,
} from '../styles/animations'

export default function Home() {
  return (
    <>
      <motion.div
        variants={pageAnimation}
        exit="exit"
        initial="hidden"
        animate="show"
      >
        <Head>
        </Head>
        <main>
          <IndexWrapper>
            <Link className="linkInd" href={'/missions'}>
              <Letters>
                <LetterA variants={letterA}>A</LetterA>
                <LetterC variants={letterC}>C</LetterC>
                <motion.h1 variants={avocatAnim}>AVOCAT</motion.h1>
              </Letters>
            </Link>
            <TextWrapper className="textInd">
              <motion.h1 variants={avocat2Anim}>
                AVOCAT AU BARREAU DE BORDEAUX
              </motion.h1>
            </TextWrapper>
            <Line1 variants={lineIndex} />
            <Line2 variants={lineIndex} />
          </IndexWrapper>
        </main>
      </motion.div>
    </>
  )
}
