import styled from "styled-components";
import {motion} from "framer-motion";

export const FiscaPartWrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 85vh;
    position: relative;
`;

export const UpperBack = styled(motion.div)`
    height: 15vh;
    width: 100%;
    background-color: rgba(140, 198, 205, 0.2);  
    position: absolute;
    top: -15vh;
`;

export const SectionFiscaPart = styled(motion.div)`
    display: flex;
    justify-content: center;
    /* align-items: center; */
    min-height: 75vh;
    width: 95%;
    @media (max-width: 850px) {
        flex-direction: column;
        width: 100%;
    }
`;

export const UpperLine = styled(motion.div)`
    height: 0.05rem;
    background: var(--bluelight);
    width: 85%;
    position: absolute;
    top: -4%;
    @media (max-width: 850px) {
        display: none;
    }
`;

export const SSFiscaPart = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;    
    width: 50%;
    padding: 0 1.5rem;
    color: var(--grey);
    div {
        margin: 0.2rem 0;
    }
    h2 {
        font-family: "RoxboroughCF";
        margin: 2rem 0;
        height: 2vw;
        text-decoration: underline;
    }
    h3 {
        font-family: "Poppins_medium";
        margin-top: 0.5rem;
    }
    p {
        font-family: "Poppins_light";
        line-height: 190%;
        font-size: clamp(0.3rem, 1.6vh, 8rem);
    }
    ul {
        padding-left: 1.5rem;
    }
    span {
        text-decoration: underline;
    }
    @media (max-width: 850px) {
        width: 100%;
        p {
            text-align: left;
        }
    }
`;

export const Underlign = styled(motion.div)`
    height: 1px;
    background: var(--bluelight);
    width: 12%;
`;

export const Line = styled(motion.div)`
    margin: 2rem 3rem 0 3rem;
    height: 65vh;
    background: black;
    width: 0.05rem;
    @media (max-width: 850px) {
        display: none;
    }
`;