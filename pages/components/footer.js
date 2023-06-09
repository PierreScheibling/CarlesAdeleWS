import Link from "next/link";
import { FooterStyles, Line, Annexes, Copywright } from "../../styles/footerStyles";
import { footerAnimation } from '@/styles/animations';

export default function Footer() {
    return (
        <FooterStyles variants={footerAnimation} initial="hidden" animate="show">
            <Line/>
            <Annexes>
                <h3>
                    <Link href={"/mentions_legales"}>Mentions légales</Link> / <Link href={"/confidentialite"}>Politique de confidentialité</Link>
                </h3>
            </Annexes>
            <Copywright>
                <span>© Site réalisé par <a href={"https://scheibling.netlify.app/"} target="_blank">Pierre SCHEIBLING</a></span>
            </Copywright>
        </FooterStyles>
    )
}