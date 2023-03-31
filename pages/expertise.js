import Image from 'next/image';
import logoexp from "../public/images/LogoAC.png"
import {ExpertiseWrapper, ExpertiseContent, Section, ImageExpWrapper, ExpertiseText} from "../styles/expertiseStyles";

export default function Expertise() {
    return (
        <>
        <ExpertiseWrapper />
        <ExpertiseContent>
            <Section>
                <Image src={logoexp} alt="logo" width={500}/>
            </Section>    
            <Section>
                <Expertise>
                    <ImageExpWrapper />
                    <ExpertiseText>
                        <h1>FISCALITÉ</h1>
                        <p>FISCALITÉ DES PARTICULIERS</p>
                        <p>FISCALITÉ DES SOCIÉTÉS</p>
                    </ExpertiseText>
                </Expertise>
            </Section>      
            <Section>
                <Expertise>
                    <ImageExpWrapper />
                    <ExpertiseText>
                        <h1>DROIT DES AFFAIRES</h1>
                        <p>DROIT DES SOCIÉTÉS</p>
                        <p>DROIT COMMERCIAL</p>
                    </ExpertiseText>
                </Expertise>
            </Section>    
        </ExpertiseContent>
        </>
    )
};