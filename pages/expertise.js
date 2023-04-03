import Image from 'next/image';
import logoexp from "../public/images/LogoAC.png";
import imgFisca from "../public/images/Fiscalité.jpeg";
import imgAff from "../public/images/Affaires.jpeg";
import Link from 'next/link';
import {ExpertiseWrapper, ExpertiseContent, LeftSide, RightSide, Section, Text} from "../styles/expertiseStyles";

export default function Expertise() {
    return (
        <>
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
                            <p>FISCALITE DES PARTICULIERS</p>
                        </Link>
                        <Link href={"/fiscalitesoc"}>
                            <p>FISCALITE DES SOCIETES</p>
                        </Link>
                    </Text>
                </Section>
                <Section>
                    <Image className="imgSection" src={imgAff} />
                    <Text>
                        <h2>DROIT DES AFFAIRES</h2>
                        <p>DROIT DES SOCIETES</p>
                        <p>DROIT COMMERCIAL</p>
                    </Text>
                </Section>
            </RightSide>
        </ExpertiseContent>
        <ExpertiseWrapper />
        </>
    )
};