import styled from "styled-components";
import {motion} from "framer-motion";

export const MissionsWrapper = styled(motion.div)`
    min-height: 85vh;
    padding: 0 3%; 
    width: 100%;
    display: flex;
    @media (max-width: 850px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const MissionsBackground = styled(motion.div)`
    position: absolute;
    top: 15vh;
    height: 85vh;
    width: 100%;
    background-color: rgba(140, 198, 205, 0.2);
`;


export const LeftSide = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 85vh;
    width: 50%;
    h1 {
        font-family: "RoxboroughCF";
        font-size: clamp(0.5rem,  6vw, 10rem);
        color: var(--greyblue);
        font-weight: lighter;
    }
    @media (max-width: 850px) {
        width: 100%;
        height: 100%;
        margin-top: 2rem;
    }
`;

export const Subtext = styled.div`
    margin-left: 37%;
    h2 {
        display: flex;
        justify-content: flex-start;
        border-top: 1px solid var(--grey);
        font-size: clamp(0.5rem,  2vw, 10rem);
        color: var(--bluelight);
        font-weight: lighter;
        padding-top: 2rem;
        line-height: 150%;
    }
    @media (max-width: 850px) {
        margin-left: 0;
        text-align: center;
        h2 {
            padding-top: 0rem;
        }
    }
`;

export const RightSide = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 85vh;
    width: 50%;
    padding: 0 4rem;
    p {
        font-size: clamp(0.2rem, 2vh, 8rem);
        font-family: "Poppins_light";
        margin: clamp(0.2rem, 4vh, 8rem) 0;
        color: var(--greyblue);
    }
    @media (max-width: 850px) {
        width: 100%;
        height: 100%;
        p{
            margin: clamp(0.2rem, 3vh, 8rem) 0;
        }
    }

`;