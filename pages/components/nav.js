import Link from "next/link";
import { NavStyles, Logo, Reseau } from "../../styles/navStyles";
import Image from 'next/image';

export default function Nav() {
    return (
        <NavStyles>
            <Logo>
                <h1>LOGO</h1>
            </Logo>
            <ul>
                <li>
                    <Link href={"/"}>
                        ACCUEIL
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        PRESENTATION
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        EXPERTISE
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        HONORAIRES
                    </Link>
                </li>
                <li>
                    <Link href={"/blog"}>
                        ARTICLES
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        CONTACT
                    </Link>
                </li>
            </ul>
            <Reseau>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </Reseau>
        </NavStyles>
    )
}