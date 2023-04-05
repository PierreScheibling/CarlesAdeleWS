import styled from "styled-components";
import {motion} from "framer-motion";

export const MissionsWrapper = styled(motion.div)`
    min-height: 85vh;
    padding: 0 3%; 
    width: 100%;
    display: flex;
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
        font-size: clamp(2rem,  6vw, 10rem);
        color: var(--greyblue);
        font-weight: lighter;
    }
`;

export const Subtext = styled.div`
    margin-left: 37%;
    h2 {
        display: flex;
        justify-content: flex-start;
        border-top: 1px solid var(--grey);
        font-size: clamp(1.5rem,  2vw, 10rem);
        color: var(--bluelight);
        font-weight: lighter;
        padding-top: 2rem;
        line-height: 150%;
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
        font-size: clamp(0.3rem, 2vh, 8rem);
        font-family: "Poppins_light";
        margin: 1.5rem 0;
        color: var(--greyblue);
    }
`;