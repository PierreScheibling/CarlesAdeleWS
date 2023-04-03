import {FiscaPartWrapper, SectionFiscaPart, SSFiscaPart, Line, Underlign, UpperBack} from "../styles/drsocStyles";

export default function FiscalitePart() {
    return (
        <FiscaPartWrapper>
            <SectionFiscaPart>
                <UpperBack />
                <SSFiscaPart>
                    <h2>DROIT DES SOCIÉTÉS</h2>
                    <h3>CREATION ET ACQUISITION DE SOCIETE</h3>
                    <Underlign />
                    <div>
                        <p>– Création de société (conseil et assistance sur le choix de la forme, rédaction des statuts, formalités légales...)</p>
                        <p>– Accompagnement dans la cession/acquisition de société et de fond de commerce  (négociations, audit juridique et fiscal, rédaction des promesses d''achat/vente, rédaction des actes de cession, formalités légales ...)</p>
                    </div>
                    <h3>RESTRUCTURATION</h3>
                    <Underlign />
                    <div>
                        <p>– Analyse et accompagnement dans la restructuration de groupe (aspects juridiques, fiscaux et financiers)</p>
                        <p>– Réalisation d’opération sur le capital (fusion, apport partiel d’actifs, augmentions et réduction de capital)</p>
                    </div>
                    <h3>PACTE D'ASSOCIES</h3>
                    <Underlign />
                    <div>
                        <p>– Négociation et rédaction des Pactes d’associés</p>
                    </div>
                    <h3>SUIVI JURIDIQUE</h3>
                    <Underlign />
                    <div>
                        <p>– Secrétariat juridique (rédaction des AG annuelles, transfert de siège, changement de dirigeant, modification des statuts, tenue des registres légaux, changement d’objet social…)</p>
                    </div>
                </SSFiscaPart>
                <Line />
                <SSFiscaPart>
                    <h2>DROIT COMMERCIAL</h2>
                    <h3>REDACTION DE CONTRAT</h3>
                    <Underlign />
                    <div>
                        <p>– Rédaction et révision de contrats commerciaux (prestations de services, contrats de cessions, franchises…)</p>
                        <p>–Rédaction de protocoles d’accords</p>
                    </div>
                    <h3>LITIGES ET CONTENTIEUX</h3>
                    <Underlign />
                    <div>
                        <p>– Accompagnement et représentation lors de conflits internes entre associés</p>
                        <p>–Accompagnement et représentation lors de conflits externes contractuels et extra contractuels (défaut de paiement, rupture abusive de contrats, rupture de pourparlers, concurrence déloyale, distribution…)</p>
                        <p>– Contentieux général du contrat commercial : formation, validité, exécution, annulation et résiliation</p>
                    </div>
                    <h3>BAUX COMMERCIAUX</h3>
                    <Underlign />
                    <div>
                        <p>– Rédaction des baux commerciaux et des avenants</p>
                        <p>– Cession et acquisition de baux commerciaux</p>
                        <p>– Assistance, négociation et représentation lors de contentieux liés aux baux commerciaux (rupture, impayés, indemnité d’éviction…)</p>
                    </div>
                </SSFiscaPart>
            </SectionFiscaPart>
        </FiscaPartWrapper>
    )
};