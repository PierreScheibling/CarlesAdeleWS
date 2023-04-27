import { useState } from 'react'
import Link from 'next/link'
import {
  NavStyles,
  Logo,
  NavBarLinks,
  MenuIcon,
  MenuLinks,
} from '../../styles/navStyles'
import Image from 'next/image'
import logonav from '../../public/images/LogoAC.png'
import { navAnimation } from '@/styles/animations'
import { toggleMenuAnim } from '../../styles/animations'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <NavStyles variants={navAnimation} initial="hidden" animate="show">
      <Logo>
        <Link onClick={closeMenu} href={'/'}>
          <Image
            className="imgNav"
            src={logonav}
            alt="logo"
            width={200}
            height={200}
            quality="50"
          />
          {/* <img src={logonav.src} alt="logo" /> */}
        </Link>
      </Logo>
      <MenuIcon onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </MenuIcon>
      {isOpen && (
        <MenuLinks
          variants={toggleMenuAnim}
          exit="exit"
          initial="hidden"
          animate="show"
        >
          <li>
            <Link href={'/missions'} onClick={closeMenu}>
              ACCUEIL
            </Link>
          </li>
          <li>
            <Link href={'/presentation'} onClick={closeMenu}>
              PRESENTATION
            </Link>
          </li>
          <li>
            <Link href={'/competences'} onClick={closeMenu}>
              COMPÉTENCES
            </Link>
          </li>
          <li>
            <Link href={'/publications'} onClick={closeMenu}>
              PUBLICATIONS
            </Link>
          </li>
          <li>
            <Link href={'/honoraires'} onClick={closeMenu}>
              HONORAIRES
            </Link>
          </li>
          <li>
            <Link href={'/contact'} onClick={closeMenu}>
              CONTACT
            </Link>
          </li>
        </MenuLinks>
      )}
      <NavBarLinks>
        <ul>
          <li>
            <Link href={'/missions'}>ACCUEIL</Link>
          </li>
          <li>
            <Link href={'/presentation'}>PRESENTATION</Link>
          </li>
          <li>
            <Link href={'/competences'}>COMPÉTENCES</Link>
          </li>
          <li>
            <Link href={'/publications'}>PUBLICATIONS</Link>
          </li>
          <li>
            <Link href={'/honoraires'}>HONORAIRES</Link>
          </li>
          <li>
            <Link href={'/contact'}>CONTACT</Link>
          </li>
        </ul>
      </NavBarLinks>
    </NavStyles>
  )
}
