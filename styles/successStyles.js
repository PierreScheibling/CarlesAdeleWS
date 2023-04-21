import styled from "styled-components";
//Animation
const {motion} = require("framer-motion");

export const SuccessContainer = styled(motion.div)`
    width: 100%;
    min-height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    font-family: "Poppins_light";
    color: var(--grey);
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    button {
        font-family: "Poppins_light";
        background: transparent;
        border: none;
        display: flex;
        font-size: clamp(0.5rem, 1.5vw, 3rem);
        cursor: pointer;
        border: 0.1px solid var(--greyblue);
        padding: 0.2rem 0.7rem;
        color: var(--greyblue);
        :hover {
        scale: 1.1;
        }
    }
`;