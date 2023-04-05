import Image from 'next/image';
import photoAd from "../public/images/Photo.png";
import {PresentationWrapper,PresentationContent, LeftSide, RightSide, Name} from "../styles/presentationStyles";
import { motion } from 'framer-motion';
import {pageAnimation} from "../styles/animations";

export default function Presentation() {
    return (
        <>
            <motion.div
            variants={pageAnimation}
            exit="exit"
            initial="hidden"
            animate="show"
            >
            <PresentationContent>
                <LeftSide initial={{ opacity: 0 }}
                animate={{ opacity:1, transition: { delay: 0.5, duration: 1.5 } }}>
                    <Name>
                        <h1>Adèle</h1>
                        <h1>Carles</h1>
                    </Name>
                    <Image className="photoAdCl" src={photoAd} alt="photo-adèle"/>
                </LeftSide>
                <RightSide>
                    <motion.p layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, transition: { delay: 0.8, duration: 0.5 } }}>Maître Adèle Carles est avocate au barreau de Bordeaux et fondatrice du Cabinet.</motion.p>

                    <motion.p layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, transition: { delay: 1, duration: 0.5 } }}>Titulaire d’un Master 2 de droit des affaires et fiscalité et d’un Diplôme de juriste conseil en entreprise (DJCE) de l’université de Bordeaux, elle a également obtenu un Certificat d’études spécialisées en droit fiscal. Afin de parfaire ses connaissances du monde de l’entreprise et comprendre au mieux les problématiques des sociétés et de leurs dirigeants, Adèle Carles est également diplomée de  l’école de commerce Kedge Business School.</motion.p>

                    <motion.p layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, transition: { delay: 1.2, duration: 0.5 } }}>Maître Adèle Carles a exercé son activité à Bordeaux et Paris au sein de Cabinets d’affaires de taille et structure différentes, lui permettant de conseiller des clients aux problématiques diverses. Elle a ainsi eu l’occasion d’assister tant des groupes d’envergure que des TPE/PME et leurs dirigeants.</motion.p>

                    <motion.p layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, transition: { delay: 1.4, duration: 0.5 } }}>A l’écoute et réactive, Maître Adèle Carles a une parfaite compréhension des problématiques rencontrées par les sociétés et leurs dirigeants. Son expertise vous assurera un accompagnement d’excellence.</motion.p>
                </RightSide>
            </PresentationContent>
            </motion.div>
            <PresentationWrapper initial={{ opacity: 0 }}
                animate={{ opacity:1, transition: { duration: 0.5 } }}/>
        </>
    )
}