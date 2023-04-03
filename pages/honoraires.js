import {HonorairesWrapper, LeftSide, RightSide, BackgroundHono, Line} from "../styles/honorairesStyles";

export default function Honoraires() {
    return (
        <HonorairesWrapper>
            <LeftSide>
                <h1>HONORAIRES</h1>
            </LeftSide>
            <RightSide>
                <Line/>
                <div>
                    <p>Les honoraires du Cabinet sont déterminés à l’avance en fonction de la complexité du dossier. </p>
                    <p>Selon le type de dossier, ils pourront être fixés au temps passé ou au forfait ou un honoraire de résultat pourra également être convenu.</p>
                    <p>Au prix qui sera défini, la TVA au taux de 20% sera applicable.</p>
                    <p>Une convention d’honoraires sera établie pour chaque dossier et une provision sera à régler à l’avance.</p>
                    <p>Le premier rendez-vous sera facturé au prix forfaitaire de 100€ HT (soit 120€ TTC), et sera déduit de l’honoraire global dû au Cabinet en cas de poursuite du dossier.</p>
                    <p>Les honoraires du Cabinet pourront être pris en charge en tout ou partie :</p>
                    <ul>
                        <li><p>par votre assurance protection juridique, si vous en avez une</p></li>
                        <li><p>par l’aide juridictionnelle, laquelle peut être accordée selon vos revenus </p></li>
                    </ul>
                </div>
            </RightSide>
            <BackgroundHono/>
        </HonorairesWrapper>
    )
}