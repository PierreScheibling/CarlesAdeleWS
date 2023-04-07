import {FiscaPartWrapper, SectionFiscaPart, BottomFiscaPart, SSFiscaPart, UpperLine, Line, Underlign} from "../styles/fiscalitepartStyles";
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
                    <h2>OPTIMISATION DE LA FISCALITÉ PERSONNELLE</h2>
                    <h3>REORGANISATION PATRIMONIALE</h3>
                    <Underlign />
                    <div>
                        <p>– Analyse des solutions de réorganisation patrimoniale envisageables </p>
                        <p><span>Exemples :</span></p>
                        <ul>
                            <li><p>intérêt d’une SCI à l’IR ou à l’IS,</p></li>
                            <li><p>création d’une holding patrimoniale,</p></li>
                            <li><p>détermination du type de revenus à percevoir (rémunérations , dividendes, revenus locatifs…)</p></li>
                            <li><p>régimes fiscaux de faveur en cas de cession de biens immobiliers ou de titres de société</p></li>
                        </ul>
                    </div>
                    <h3>PLANIFICATION SUCCESSORALE</h3>
                    <Underlign />
                    <div>
                        <p>– Conseil sur la planification successorale et l’intégration des héritiers dans le patrimoine familial</p>
                        <p><span>Exemples :</span></p>
                        <ul>
                            <li><p>donations en démembrement de propriété (usufruit/nue-propriété)</p></li>
                            <li><p>Pacte Dutreil…</p></li>
                        </ul>
                    </div>
                </SSFiscaPart>
                <Line />
                <SSFiscaPart>
                    <h2>DECLARATIONS FISCALES</h2>
                    <h3>DEPOT DES DECLARATIONS</h3>
                    <Underlign />
                    <div>
                        <p>– Assistance pour compléter et déposer les déclarations annuelles :</p>
                        <ul>
                            <li><p>d’impôt sur le revenu (IR)</p></li>
                            <li><p>d’impôt sur la fortune immobilière (IFI),</p></li>
                            <li><p>des Sociétés civiles immobilières (SCI),</p></li>
                        </ul>
                        <p>– Analyse et suivi du prélèvement à la source,</p>
                        <p>– Assistance pour déclarer toute opération mobilière ou immobilière aux services fiscaux</p>
                        <p><span>Exemples :</span></p>
                        <ul>
                            <li><p>déclarations des cessions de titres et calcul de la plus-value</p></li>
                            <li><p>déclarations de prêts familiaux</p></li>
                        </ul>
                    </div>
                </SSFiscaPart>
                <Line />
                <SSFiscaPart>
                    <h2>CONTENTIEUX FISCAUX</h2>
                    <h3>CONTROLE FISCAL</h3>
                    <Underlign />
                    <div>
                        <p>– Assistance pendant les contrôles fiscaux</p>
                        <ul>
                            <li><p>préparation du contrôle fiscal</p></li>
                            <li><p>accompagnement lors des rendez-vous,</p></li>
                            <li><p>relation et négociation avec les services fiscaux</p></li>
                        </ul>
                    </div>
                    <h3>PROCEDURES CONTENTIEUSES</h3>
                    <Underlign />
                    <div>
                        <p>– Représentation lors de contentieux fiscaux devant les tribunaux</p>
                        <ul>
                            <li><p>rédaction des conclusions</p></li>
                            <li><p>audiences de plaidoiries</p></li>
                        </ul>
                    </div>
                    <h3>AVOIRS ETRANGERS</h3>
                    <Underlign />
                    <div>
                        <p>– Assistance pour régulariser les détentions d’avoirs étrangers auprès des autorités fiscales françaises</p>
                    </div>
                </SSFiscaPart>
            </SectionFiscaPart>
            <BottomFiscaPart>
                <motion.h1 variants={fiscaTextAnim}>FISCALITÉ DES PARTICULIERS</motion.h1>
                <motion.div variants={fiscabackAnim}/>
            </BottomFiscaPart>
        </FiscaPartWrapper>
        </motion.div>
        </>
    )
};