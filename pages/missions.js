import { MissionsWrapper, LeftSide, RightSide, Subtext } from "../styles/missionsStyles";

export default function Missions() {
    return (
        <MissionsWrapper>
            <LeftSide>
                <h1>Nos missions</h1>
                <Subtext>
                    <h2>VOUS CONSEILLER & PROTEGER VOS INTERETS</h2>
                </Subtext>
            </LeftSide>
            <RightSide>
                <p>La complexification du droit des affaires nécessite un accompagnement personnalisé tant à titre préventif que lors la mise en œuvre d’une procédure contentieuse.</p>

                <p>Le Cabinet propose un support permanent afin de répondre à l’ensemble des problématiques fiscales et juridiques auxquelles vous vous trouvez confrontés. Les réponses données tiennent compte de l’environnement juridique, des contraintes de l’activité et de la stratégie de l’entreprise.</p>

                <p>Le Cabinet travaille aux côtés des dirigeants pour les assister ainsi qu’en étroite collaboration avec leur expert-comptable pour un accompagnement efficace et rigoureux.</p>

                <p>Grace à une palette large de compétences, le Cabinet mettra en œuvre une stratégie juridique et fiscale en parfaite cohérence avec vos besoins.</p>
            </RightSide>
        </MissionsWrapper>
    )
}