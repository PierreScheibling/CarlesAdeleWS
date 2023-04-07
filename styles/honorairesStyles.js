import styled from "styled-components";
import {motion} from "framer-motion";

export const HonorairesWrapper = styled(motion.div)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-height: 85vh;
    position: relative;
    @media (max-width: 850px) {
        flex-direction: column;
    }
`;

export const BackgroundHono = styled(motion.div)`
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    min-height: 115vh;
    background: rgba(140, 198, 205, 0.2);
`;

export const LeftSide = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 50%;
    min-height: 85vh;
    h1 {
        margin-top: 1rem;
        font-family: "RoxboroughCF";
        color: var(--greyblue);
        font-size: clamp(0.5rem, 10vh, 15rem);
        font-weight: lighter;
    }
    @media (max-width: 850px) {
        min-height: 100%;
        h1 {
        margin-top: 0;
        font-size: clamp(0.5rem, 6vh, 15rem);
        }
    }
`;

export const RightSide = styled(motion.div)`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 50%;
    min-height: 85vh;
    padding: 0 4rem;
    margin-top: 1rem;
    div {
        margin-top: 0.5rem;
    }
    p {
        font-size: clamp(0.3rem, 2vh, 8rem);
        font-family: "Poppins_light";
        margin: 0.7rem 0;
        color: var(--grey);
    }
    li {
        margin-left: 1rem;
    }
    @media (max-width: 850px) {
        width: 100%;
        height: 100%;
        padding: 0 2.5rem;
        p{
            margin: clamp(0.2rem, 2vh, 8rem) 0;
        }
    }
`;

export const Line = styled(motion.div)`
    position: relative;
    left: -20%;
    background: var(--black);
    height: 0.05rem;
    width: 100%;
`;