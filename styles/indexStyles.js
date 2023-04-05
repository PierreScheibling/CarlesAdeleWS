import styled from "styled-components";
import {motion} from "framer-motion"

export const IndexWrapper = styled(motion.div)`
    min-height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    .linkInd {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 70vh;
        .imgInd {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    };
    .textInd {
        height: 50%;
    }
`;

export const Text = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Poppins_light";
    color: var(--bluelight);
    position: relative;
    /* border-top: solid 1px var(--grey); */
    width: 80%;
    height: 30vh;
    h1{
        font-size: clamp(0.5rem, 4vh, 12rem);
        padding: 2rem;
    }
`;

export const Line1 = styled(motion.div)`
    position: absolute;
    top: 82%;
    right: 50%;
    height: 0.15%;
    width: 40%;
    background-color: var(--grey);
`;

export const Line2 = styled(motion.div)`
    position: absolute;
    top: 82%;
    left: 50%;
    height: 0.15%;
    width: 40%;
    background-color: var(--grey);
`;

export const Letters = styled(motion.div)`
    position: relative;
    width: clamp(1rem, 42vh, 20rem);
    height: clamp(1rem, 42vh, 20rem);
    color: var(--grey);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    h1{
        position: absolute;
        bottom: -15%;
        font-family: "Versailles";
        font-weight: lighter;
        font-size: clamp(1rem, 7vh, 15rem);
    }
`;

export const LetterA = styled(motion.div)`
    position: absolute;
    font-family: "Casanova";
    font-size: clamp(1rem, 42vh, 20rem);
`;

export const LetterC = styled(motion.div)`
    position: absolute;
    font-family: "Casanova";
    font-size: clamp(1rem, 42vh, 20rem);
    opacity: 0.8;
`;


