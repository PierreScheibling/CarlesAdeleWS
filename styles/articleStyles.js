import styled from "styled-components";
import {motion} from "framer-motion"


export const ContentWrapper = styled(motion.div)`
    display: flex;
    min-height: 85vh;
    flex-direction: column;
    align-content: center;
    justify-content: flex-start;
    margin: 0 4rem;
    font-family: "Poppins_light";
    color: var(--black);
    img {
        /* width: 100%; */
        object-fit: cover;
        height: 35vh;
    }
    @media (max-width: 850px) {
        margin: 0 2rem;
    }
`;

export const Content = styled(motion.div)`
    p {
        margin: 1rem 0;
    }
    p strong {
        font-family: "Poppins_bold";
    }
    div {
        width: 100%;
    }
    li {
        font-size: clamp(0.6rem, 1.8vh, 8rem);
        margin-left: 1rem;
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
    align-items: center;
`;