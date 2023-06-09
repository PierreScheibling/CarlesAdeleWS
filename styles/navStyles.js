import styled from 'styled-components'
import { motion } from 'framer-motion'

export const NavStyles = styled(motion.div)`
  z-index: 10;
  min-height: 15vh;
  width: 100%;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  list-style: none;
  font-family: 'Versailles';
  ul {
    list-style: none;
    font-size: clamp(0.4rem, 2.5vh, 12rem);
    color: var(--greyblue);
  }
  @media (max-width: 850px) {
    justify-content: space-between;
  }
`

export const Logo = styled.div`
  position: absolute;
  left: 0;
  height: 15vh;
  .imgNav {
    height: 15vh;
    width: 15vh;
    object-fit: fill;
  }
  @media (max-width: 850px) {
    position: relative;
  }
`

export const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  div {
    width: 25px;
    height: 3px;
    margin: 5px;
    background-color: var(--greyblue);
  }

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    /* align-items: center;
        position: absolute; */
    top: 5vh;
  }
`

export const MenuLinks = styled.ul`
  display: none;
  justify-content: center;
  align-items: center;
  @media (max-width: 850px) {
    width: 100%;
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: white;
    height: 100vh;
    top: 15vh;
    transition: all;
    li {
      margin: 1rem 0;
      :hover {
        font-size: clamp(0.4rem, 2.7vh, 12rem);
      }
    }
  }
`

export const NavBarLinks = styled.ul`
  width: 80%;
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    font-size: clamp(0.2rem, 2.5vh, 12rem);
    color: var(--greyblue);
  }
  @media (max-width: 850px) {
    display: none;
  }
`
