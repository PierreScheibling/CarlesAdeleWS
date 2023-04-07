import { useState } from "react";
import Link from "next/link";
import { NavStyles, Logo, NavBarLinks, MenuIcon, MenuLinks } from "../../styles/navStyles";
import Image from 'next/image';
import logonav from "../../public/images/LogoAC.png";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closeMenu = () => {
        setIsOpen(false);
      };    

    return (
        <NavStyles>
            <Logo>
                <Link href={"/"}>
                    <Image className="imgNav" src={logonav} alt="logo" />
                </Link>
            </Logo>
            <MenuIcon onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </MenuIcon>
            {isOpen && (
                <MenuLinks>
                    <li>
                    <Link href={"/missions"} onClick={closeMenu}>ACCUEIL</Link>
                    </li>
                    <li>
                    <Link href={"/presentation"} onClick={closeMenu}>PRESENTATION</Link>
                    </li>
                    <li>
                    <Link href={"/expertise"} onClick={closeMenu}>EXPERTISES</Link>
                    </li>
                    <li>
                    <Link href={"/actualites"} onClick={closeMenu}>ACTUALITÉS</Link>
                    </li>
                    <li>
                    <Link href={"/honoraires"} onClick={closeMenu}>HONORAIRES</Link>
                    </li>
                    <li>
                    <Link href={"/contact"} onClick={closeMenu}>CONTACT</Link>
                    </li>
                </MenuLinks>
            )}
            <NavBarLinks>
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
                        <Link href={"/actualites"}>
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
            </NavBarLinks>
        </NavStyles>
    )
}