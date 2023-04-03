import Image from 'next/image';
import photoAd from "../public/images/Photo.png";
import {PresentationWrapper,PresentationContent, LeftSide, RightSide, Name} from "../styles/presentationStyles";

export default function Presentation() {
    return (
        <>
            <PresentationWrapper />
            <PresentationContent>
                <LeftSide>
                    <Name>
                        <h1>Adèle</h1>
                        <h1>Carles</h1>
                    </Name>
                    <Image className="photoAdCl" src={photoAd} alt="photo-adèle"/>
                </LeftSide>
                <RightSide>
                    <p>Maître Adèle Carles est avocate au barreau de Bordeaux et fondatrice du Cabinet.</p>

                    <p>Titulaire d’un Master 2 de droit des affaires et fiscalité et d’un Diplôme de juriste conseil en entreprise (DJCE) de l’université de Bordeaux, elle a également obtenu un Certificat d’études spécialisées en droit fiscal. Afin de parfaire ses connaissances du monde de l’entreprise et comprendre au mieux les problématiques des sociétés et de leurs dirigeants, Adèle Carles est également diplomée de  l’école de commerce Kedge Business School.</p>

                    <p>Maître Adèle Carles a exercé son activité à Bordeaux et Paris au sein de Cabinets d’affaires de taille et structure différentes, lui permettant de conseiller des clients aux problématiques diverses. Elle a ainsi eu l’occasion d’assister tant des groupes d’envergure que des TPE/PME et leurs dirigeants.</p>

                    <p>A l’écoute et réactive, Maître Adèle Carles a une parfaite compréhension des problématiques rencontrées par les sociétés et leurs dirigeants. Son expertise vous assurera un accompagnement d’excellence.</p>
                </RightSide>
            </PresentationContent>
        </>
    )
}