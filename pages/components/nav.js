import Link from "next/link";
import { NavStyles, Logo, Reseau } from "../../styles/navStyles";
import Image from 'next/image';

export default function Nav() {
    return (
        <NavStyles>
            <Logo>
                <Link href={"/"}>
                    <h1>LOGO</h1>
                </Link>
            </Logo>
            <ul>
                <li>
                    <Link href={"/presentation"}>
                        PRESENTATION
                    </Link>
                </li>
                <li>
                    <Link href={"/expertise"}>
                        EXPERTISE
                    </Link>
                </li>
                <li>
                    <Link href={"/honoraires"}>
                        HONORAIRES
                    </Link>
                </li>
                <li>
                    <Link href={"/blog"}>
                        ARTICLES
                    </Link>
                </li>
                <li>
                    <Link href={"/contact"}>
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