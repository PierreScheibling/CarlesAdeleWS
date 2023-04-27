import Image from 'next/image'
import logoexp from '../public/images/LogoAC.png'
import imgFisca from '../public/images/Fiscalité.jpg'
import imgAff from '../public/images/Affaires.jpg'
import Link from 'next/link'
import {
  ExpertiseWrapper,
  ExpertiseContent,
  LeftSide,
  RightSide,
  Section,
  Text,
} from '../styles/competencesStyles'
import { motion } from 'framer-motion'
import {
  pageAnimation,
  expertiseTitleAnim,
  expertiseTextAnim,
} from '../styles/animations'

export default function Expertise() {
  return (
    <>
      <motion.div
        variants={pageAnimation}
        exit="exit"
        initial="hidden"
        animate="show"
      >
        <ExpertiseContent>
          <LeftSide>
            <Image className="imgExp" src={logoexp} alt="logoExp" />
          </LeftSide>
          <RightSide
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.7 } }}
          >
            <Section>
              <Image
                className="imgSection"
                src={imgFisca}
                alt="image-section"
                quality="50"
              />
              <Text
                variants={expertiseTitleAnim}
                exit="exit"
                initial="hidden"
                animate="show"
              >
                <h2>FISCALITÉ</h2>
                <Link href={'/fiscalitepart'}>
                  <motion.p
                    variants={expertiseTextAnim}
                    exit="exit"
                    initial="hidden"
                    animate="show"
                  >
                    FISCALITÉ DES PARTICULIERS
                  </motion.p>
                </Link>
                <Link href={'/fiscalitesoc'}>
                  <motion.p
                    variants={expertiseTextAnim}
                    exit="exit"
                    initial="hidden"
                    animate="show"
                  >
                    FISCALITÉ DES SOCIÉTÉS
                  </motion.p>
                </Link>
              </Text>
            </Section>
            <Section>
              <Image className="imgSection" src={imgAff} alt="image-section" quality="50"/>
              <Text
                Text
                variants={expertiseTitleAnim}
                exit="exit"
                initial="hidden"
                animate="show"
              >
                <h2>DROIT DES AFFAIRES</h2>
                <Link href={'/drsoc'}>
                  <motion.p
                    variants={expertiseTextAnim}
                    exit="exit"
                    initial="hidden"
                    animate="show"
                  >
                    DROIT DES SOCIÉTÉS
                  </motion.p>
                </Link>
                <Link href={'/drsoc'}>
                  <motion.p
                    variants={expertiseTextAnim}
                    exit="exit"
                    initial="hidden"
                    animate="show"
                  >
                    DROIT COMMERCIAL
                  </motion.p>
                </Link>
              </Text>
            </Section>
          </RightSide>
        </ExpertiseContent>
        <ExpertiseWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
        />
      </motion.div>
    </>
  )
}
