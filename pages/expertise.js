import Image from 'next/image';
import logoexp from "../public/images/LogoAC.png";
import imgFisca from "../public/images/Fiscalité.jpeg";
import imgAff from "../public/images/Affaires.jpeg";
import Link from 'next/link';
import {ExpertiseWrapper, ExpertiseContent, LeftSide, RightSide, Section, Text} from "../styles/expertiseStyles";
import { motion } from 'framer-motion';
import {pageAnimation} from "../styles/animations";

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
                        <Image className="imgExp" src={logoexp} />
                    </LeftSide>
                    <RightSide>
                        <Section>
                            <Image className="imgSection" src={imgFisca} />
                            <Text>
                                <h2>FISCALITÉ</h2>
                                <Link href={"/fiscalitepart"}>
                                    <p>FISCALITÉ DES PARTICULIERS</p>
                                </Link>
                                <Link href={"/fiscalitesoc"}>
                                    <p>FISCALITÉ DES SOCIÉTÉS</p>
                                </Link>
                            </Text>
                        </Section>
                        <Section>
                            <Image className="imgSection" src={imgAff} />
                            <Text>
                                <h2>DROIT DES AFFAIRES</h2>
                                <Link href={"/drsoc"}>
                                    <p>DROIT DES SOCIÉTÉS</p>
                                </Link>
                                <Link href={"/drsoc"}>
                                    <p>DROIT COMMERCIAL</p>
                                </Link>
                            </Text>
                        </Section>
                    </RightSide>
                </ExpertiseContent>
            <ExpertiseWrapper />
        </motion.div>
        </>
    )
};