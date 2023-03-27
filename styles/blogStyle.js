import styled from "styled-components";
//Animation
const {motion} = require("framer-motion");

export const BlogWrapper = styled(motion.div)`
    img {
        width: 50%;
    }
`;

export const ArticleWrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: justify;
`;