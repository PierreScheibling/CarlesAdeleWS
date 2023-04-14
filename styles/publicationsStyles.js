import styled from "styled-components";
//Animation
const {motion} = require("framer-motion");

export const BlogWrapper = styled(motion.div)`
    width: 90%;
    min-height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Title = styled(motion.div)`
    position: relative;
    width: 100%;
    div {
        z-index: -1;
        height: 4vh;
        width: 33%;
        position: absolute;
        bottom: 0;
        background-color: rgba(140, 198, 205, 0.2);
    }
    h1 {
        font-family: "RoxboroughCF";
        color: var(--grey);
        font-weight: lighter;
        margin-left: 3rem;
        font-size: clamp(0.5rem, 7vh, 15rem);
    }
    @media (max-width: 850px) {
        h1 {
        margin-left: 1rem;
        font-size: clamp(0.5rem, 5vh, 15rem);
        }
    }
`;
export const TitleLine = styled(motion.div)`
    z-index: -1;
    height: 4vh;
    width: 33%;
    position: absolute;
    bottom: 0;
    background-color: rgba(140, 198, 205, 0.2);
`;

export const ArticleWrapper = styled(motion.div)`
    display: flex;
    justify-content: flex-start;
    text-align: justify;
    margin: 2rem 0 2rem 10rem;
    height: 100%;
    width: 50%;
    position: relative;
    color: var(--grey);
    cursor: pointer;
    img {
        height: 90%;
        width: 30%;
        object-fit: cover;
    }
    @media (max-width: 850px) {
        width: 90%;
        margin: 2rem 0 2rem 2rem;
    }
`;

export const Line = styled(motion.div)`
    position: absolute;
    bottom: 0;
    height: 0.05rem;
    width: 100%;
    background-color: var(--grey);
`;

export const Articles = styled(motion.div)`
    width: 100%;
`;

export const Content = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-left: 1.5rem;
    font-family: "TTDrugs";
    line-height: 170%;
    h2 {
        font-weight: bolder;
    }
    @media (max-width: 850px) {
        line-height: 150%;
        padding-left: 1rem;
    }
`;
