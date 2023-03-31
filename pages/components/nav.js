import Link from "next/link";
import { NavStyles, Logo } from "../../styles/navStyles";
import Image from 'next/image';
import logonav from "../../public/images/LogoAC.png";

export default function Nav() {
    return (
        <NavStyles>
            <Logo>
                <Link href={"/"}>
                    <Image src={logonav} alt="logo" />
                </Link>
            </Logo>
            <ul>
                <li>
                    <Link href={"/missions"}>
                        ACCUEIL
                    </Link>
                </li>
                <li>
                    <Link href={"/presentation"}>
                        PRESENTATION
                    </Link>
                </li>
                <li>
                    <Link href={"/expertise"}>
                        EXPERTISES
                    </Link>
                </li>
                <li>
                    <Link href={"/blog"}>
                        ACTUALITÉS
                    </Link>
                </li>
                <li>
                    <Link href={"/honoraires"}>
                        HONORAIRES
                    </Link>
                </li>
                <li>
                    <Link href={"/contact"}>
                        CONTACT
                    </Link>
                </li>
            </ul>
        </NavStyles>
    )
}