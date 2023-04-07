import {FiscaPartWrapper, SectionFiscaPart, BottomFiscaPart, SSFiscaPart, UpperLine, Line, Underlign} from "../styles/fiscalitesocStyles";
import { motion } from 'framer-motion';
import {pageAnimation, fiscaTextAnim, fiscabackAnim} from "../styles/animations";

export default function FiscalitePart() {
    return (
        <>
            <motion.div
            variants={pageAnimation}
            exit="exit"
            initial="hidden"
            animate="show"
            >
        <FiscaPartWrapper>
            <SectionFiscaPart>
                <UpperLine />
                <SSFiscaPart>
                    <h2>FISCALITE DES SOCIETES</h2>
                    <h3>RESTRUCTURATION</h3>
                    <Underlign />
                    <div>
                        <p>– Analyse des réorganisations envisageables en vue de l’optimisation de la fiscalité des entreprises et de leurs associés </p>
                        <p><span>Exemples :</span></p>
                        <ul>
                            <li><p>création d’une holding société mère et de filiales,</p></li>
                            <li><p>mise en place du régime mère-fille, </p></li>
                            <li><p>mise en place d’une circulation des flux de trésorerie intra-groupe…</p></li>
                        </ul>
                        <p>– Due diligences fiscales en cas d’acquisition ou cession de société</p>
                    </div>
                    <h3>IMPOT SUR LES SOCIETES</h3>
                    <Underlign />
                    <div>
                        <p>– Accompagnement dans la déclaration et le calcul de l’impôt sur les sociétés annuel</p>
                        <p>- Mise en place d’une intégration fiscale</p>
                        <p>- Option à l'impôt sur les sociétés</p>
                    </div>
                    <h3>INTERESSEMENT DES SALARIES</h3>
                    <Underlign />
                    <div>
                        <p>– Analyse et mise en place de mécanisme d’intéressement des salariés (BSPCE, stock-options, actions gratuites…)</p>
                    </div>
                </SSFiscaPart>
                <Line />
                <SSFiscaPart>
                    <h2>CONTENTIEUX FISCAUX</h2>
                    <h3>CONTROLE FISCAL</h3>
                    <Underlign />
                    <div>
                        <p>– Assistance pendant les contrôles fiscaux </p>
                        <ul>
                            <li><p>préparation du contrôle fiscal</p></li>
                            <li><p>accompagnement lors des rendez-vous,</p></li>
                            <li><p>relations et négociation avec les services fiscaux</p></li>
                        </ul>
                    </div>
                    <h3>PROCEDURES CONTENTIEUSES </h3>
                    <Underlign />
                    <div>
                        <p>– Représentation lors de contentieux fiscaux devant les tribunaux</p>
                        <ul>
                            <li><p>rédaction des conclusions</p></li>
                            <li><p>audiences de plaidoiries</p></li>
                        </ul>
                    </div>
                </SSFiscaPart>
            </SectionFiscaPart>
            <BottomFiscaPart>
                <motion.h1 variants={fiscaTextAnim}>FISCALITÉ DES SOCIÉTÉS</motion.h1>
                <motion.div variants={fiscabackAnim}/>
            </BottomFiscaPart>
        </FiscaPartWrapper>
        </motion.div>
        </>
    )
};