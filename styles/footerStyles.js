import styled from "styled-components";
import { motion } from 'framer-motion';

export const FooterStyles = styled(motion.div)`
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    position: relative;
    font-family: "Poppins_light";
    @media (max-width: 850px) {
        h3 {
            font-size: clamp(0.7rem, 1.5vh, 10rem);
        }
    }
`;

export const Line = styled(motion.div)`
    position: absolute;
    top: 0;
    height: 0.1rem;
    width: 80%;
    background: var(--bluelight);
`;

export const Annexes = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

`;

export const Copywright = styled(motion.div)`
    span {
        font-size: clamp(0.3rem, 1.8vh, 8rem);;
    }
`;
