import styled from "styled-components";
import {motion} from "framer-motion";

export const ExpertiseWrapper = styled(motion.div)`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    background: rgba(140, 198, 205, 0.2);
    z-index: -1;
`;

export const ExpertiseContent = styled(motion.div)`
    min-height: 85vh;
    display: flex;
    align-items: center;
`;

export const LeftSide = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 85vh;
    width: 30%;
    .imgExp {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @media (max-width: 850px) {
        display: none;
    }
`;

export const RightSide = styled(motion.div)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 70%;
    @media (max-width: 850px) {
        flex-direction: column;
        width: 100%;
        margin-top: 0;
        justify-content: space-evenly;
    }
`;

export const Section = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 40%;
    padding: 0 1rem;
    margin-bottom: 1rem;
    .imgSection {
        width: 100%;
        height: 35vh;
        object-fit: cover;
        padding-bottom: 1rem;
    }
    @media (max-width: 850px) {
        width: 100%;
        .imgSection {
        width: 100%;
        height: 15vh;
        padding-bottom: 0;
        object-fit: cover;
    }
    }
`;

export const Text = styled(motion.div)`
    background-color: white;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--greyblue);
    h2 {
        font-family: "RoxboroughCF";
        margin: 1.5rem 0;
        font-size: clamp(0.4rem, 3.5vh, 12rem);
        text-align: center;
    }
    p {
        font-family: "Poppins_medium";
        margin: 1rem 0 1.5rem 0;
        font-size: clamp(0.3rem, 2.3vh, 8rem);
    }
    @media (max-width: 850px) {
        /* height: 20vh; */
        align-items: flex-start;
        h2 {
            margin: 1rem 0 1rem 0.5rem;
            font-size: clamp(0.4rem, 3vh, 12rem);
        }
        p {
            margin: 0.5rem 0 0.5rem 0.5rem;
        }
    }
`;
