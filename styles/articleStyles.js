import styled from "styled-components";
import {motion} from "framer-motion"


export const ContentWrapper = styled(motion.div)`
    display: flex;
    width: 90%;
    min-height: 85vh;
    flex-direction: column;
    align-content: center;
    justify-content: flex-start;
    margin: 0 4rem;
    font-family: "Poppins_light";
    color: var(--black);
    img {
        width: 100%;
        object-fit: cover;
        height: 30vh;
    }
`;

export const Content = styled(motion.div)`
    p {
        margin: 1rem 0;
    }
`;

export const Title = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
`;

export const Subtitle = styled(motion.div)`
    display: flex;
    justify-content: space-between;
`;