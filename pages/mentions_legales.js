import { MentionWrapper, Underlign, Text, Section } from "../styles/mentionStyles.js";
import {motion} from "framer-motion";
import {pageAnimation, mentionLineAnim} from "../styles/animations";

export default function Mention() {
    return (
        <>
        <motion.div
            variants={pageAnimation}
            exit="exit"
            initial="hidden"
            animate="show"
            >
        <MentionWrapper>
                <h1>MENTIONS LÉGALES</h1>
            <Text>
                <Section>
                    <h3>1 – Édition du site</h3>
                    <Underlign variants={mentionLineAnim}/>
                    <div>
                        <p>En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, il est précisé aux utilisateurs du site internet https://carles-avocat.fr l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi:</p>
                        <ul>
                            <li><p>Propriétaire du site : Adèle CARLES – Contact : contact@ac-avocat.fr 06 60 67 95 95 – Adresse : 52 rue des Remparts - 33000 BORDEAUX.</p></li>
                            <li><p>Identification de l’entreprise : Adèle CARLES : – Adresse postale : 52 rue des Remparts - 33000 BORDEAUX.</p></li>
                            <li><p>Directeur de la publication : – Contact : Adèle CARLES </p></li>
                            <li><p>Hébergeur : /// </p></li>
                            <li><p>Délégué à la protection des données : contact@ac-avocat.fr</p></li>
                            <li><p>Autres contributeurs : Site web réalisé par <a href={"https://scheibling.netlify.app/"} target="_blank">Pierre SCHEIBLING</a>.</p></li>
                        </ul>
                    </div>
                </Section>
                <Section>
                    <h3>2 – Propriété intellectuelle et contrefaçons.</h3>
                    <Underlign variants={mentionLineAnim}/>
                    <div>
                        <p>Adèle CARLES est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons.</p>
                        <p>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Adèle CARLES.</p>
                        <p>Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>
                    </div>
                </Section>
                <Section>
                    <h3>3 – Limitations de responsabilité.</h3>
                    <Underlign variants={mentionLineAnim}/>
                    <div>
                        <p>Adèle CARLES ne pourra être tenu pour responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site https://carles-avocat.fr.</p>
                        <p>Adèle CARLES décline toute responsabilité quant à l’utilisation qui pourrait être faite des informations et contenus présents sur https://carles-avocat.fr.</p>
                        <p>Adèle CARLES s’engage à sécuriser au mieux le site https://carles-avocat.fr, cependant sa responsabilité ne pourra être mise en cause si des données indésirables sont importées et installées sur son site à son insu.</p>
                        <p>Des espaces interactifs (espace contact ou commentaires) sont à la disposition des utilisateurs. Adèle CARLES se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données.</p>
                        <p>Le cas échéant, Adèle CARLES se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie …).</p>
                    </div>
                </Section>
                <Section>
                    <h3>4 – CNIL et gestion des données personnelles.</h3>
                    <Underlign />
                    <div>
                        <p>Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée, l’utilisateur du site https://carles-avocat.fr dispose d’un droit d’accès, de modification et de suppression des informations collectées. Pour exercer ce droit, envoyez un message à notre Délégué à la Protection des Données : //</p>
                        <p>Pour plus d’informations sur la façon dont nous traitons vos données (type de données, finalité, destinataire…), lisez notre Politique de Confidentialité.</p>
                        <p>Il est également possible de déposer une réclamation auprès de la CNIL.</p>
                    </div>
                </Section>
                <Section>
                    <h3>5 – Liens hypertextes et cookies</h3>
                    <Underlign variants={mentionLineAnim}/>
                    <div>
                        <p>Le site https://carles-avocat.fr contient des liens hypertextes vers d’autres sites et dégage toute responsabilité à propos de ces liens externes ou des liens créés par d’autres sites vers https://carles-avocat.fr.</p>
                        <p>La navigation sur le site https://carles-avocat.fr est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur.</p>
                        <p>Un « cookie » est un fichier de petite taille qui enregistre des informations relatives à la navigation d’un utilisateur sur un site. Les données ainsi obtenues permettent d’obtenir des mesures de fréquentation, par exemple.</p>
                        <p>Vous avez la possibilité d’accepter ou de refuser les cookies en modifiant les paramètres de votre navigateur. Aucun cookie ne sera déposé sans votre consentement.</p>
                        <p>Les cookies sont enregistrés pour une durée maximale de 1 mois.</p>
                        <p>Pour plus d’informations sur la façon dont nous faisons usage des cookies, lisez notre Politique de Confidentialité.</p>
                    </div>
                </Section>
                <Section>
                    <h3>6 – Droit applicable et attribution de juridiction.</h3>
                    <Underlign variants={mentionLineAnim}/>
                    <div>
                        <p>Tout litige en relation avec l’utilisation du site https://carles-avocat.fr est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de Bordeaux.</p>
                    </div>
                </Section>
            </Text>
        </MentionWrapper>
        </motion.div>
        </>
    )
}