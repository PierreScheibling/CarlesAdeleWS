import styled from "styled-components";
import {motion} from "framer-motion";

export const PresentationWrapper = styled(motion.div)`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
    to top,
    white 0%,
    white 50%,
    rgba(140, 198, 205, 0.2) 50%,
    rgba(140, 198, 205, 0.2) 100%
  );
  z-index: -1;
`;

export const PresentationContent = styled(motion.div)`
    min-height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 850px) {
        flex-direction: column;
        justify-content: flex-start;
    }
`;

export const LeftSide = styled(motion.div)`
  min-height: 85vh;
  margin-top: -15vh;
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .photoAdCl {
        width: 40%;
        height: 65vh;
        object-fit: cover;
        opacity: 1;
    }
    @media (max-width: 850px) {
      align-items: flex-start;
      justify-content: space-evenly;
      min-height: 50vh;
      width: 100%;
      margin-top: 0vh;
        .photoAdCl {
          width: clamp(5%, 25vh, 40%);
          height: clamp(5%, 45vh, 40%);
          object-fit: cover;
          opacity: 1;
      }
    }
`;

export const Name = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-family: "RoxboroughCF";
    font-weight: lighter;
    font-size: clamp(1.5rem,  6vw, 10rem);
    color: var(--grey);
  }
  @media (max-width: 850px) {
    width: 40%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 25vh;
  }
`;

export const RightSide = styled(motion.div)`
    width: 50%;
    margin-top: -15vh;
    padding: 0 4rem;
    p {
        font-size: clamp(0.3rem, 2vh, 8rem);
        font-family: "Poppins_light";
        margin: 1.5rem 0;
        color: var(--grey);
    }
    @media (max-width: 850px) {
        width: 100%;
        padding: 0 2.5rem;
        p{
          font-size: clamp(0.6rem, 1.55vh, 8rem);
          margin: clamp(0.2rem, 2vh, 8rem) 0;
        }
    }
`;