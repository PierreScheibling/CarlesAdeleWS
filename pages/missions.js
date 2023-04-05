import { MissionsWrapper, MissionsBackground, LeftSide, RightSide, Subtext } from "../styles/missionsStyles";
import { motion } from 'framer-motion';
import {pageAnimation, titleAnim} from "../styles/animations";

export default function Missions() {
    return (
        <>
            <motion.div
            variants={pageAnimation}
            exit="exit"
            initial="hidden"
            animate="show"
            >
            <MissionsWrapper>
                <LeftSide variants={titleAnim}>
                    <h1>Nos missions</h1>
                    <Subtext>
                        <h2>VOUS CONSEILLER & PROTEGER VOS INTERETS</h2>
                    </Subtext>
                </LeftSide>
                <RightSide>
                    <motion.p layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, transition: { delay: 0.8, duration: 0.5 } }}>La complexification du droit des affaires nécessite un accompagnement personnalisé tant à titre préventif que lors la mise en œuvre d’une procédure contentieuse.</motion.p>

                    <motion.p layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, transition: { delay: 1, duration: 0.5 } }}>Le Cabinet propose un support permanent afin de répondre à l’ensemble des problématiques fiscales et juridiques auxquelles vous vous trouvez confrontés. Les réponses données tiennent compte de l’environnement juridique, des contraintes de l’activité et de la stratégie de l’entreprise.</motion.p>

                    <motion.p layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, transition: { delay: 1.2, duration: 0.5 } }}>Le Cabinet travaille aux côtés des dirigeants pour les assister ainsi qu’en étroite collaboration avec leur expert-comptable pour un accompagnement efficace et rigoureux.</motion.p>

                    <motion.p layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, transition: { delay: 1.4, duration: 0.5 } }}>Grace à une palette large de compétences, le Cabinet mettra en œuvre une stratégie juridique et fiscale en parfaite cohérence avec vos besoins.</motion.p>
                </RightSide>
            </MissionsWrapper>
            <MissionsBackground initial={{ opacity: 0 }}
                animate={{ opacity:1, transition: { duration: 1 } }}/>
            </motion.div>
        </>
    )
}