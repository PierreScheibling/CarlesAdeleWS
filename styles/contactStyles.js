import styled from "styled-components";
import {motion} from "framer-motion";

export const ContactWrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 85vh;
`;

export const Title = styled(motion.div)`
    h1 {
        font-family: "RoxboroughCF";
        font-weight: lighter;
        color: var(--greyblue);
        font-size: clamp(0.5rem, 9vh, 15rem);
    }
    @media (max-width: 850px) {
        h1 {
            font-size: clamp(0.5rem, 7vh, 15rem);
        };
    }
`;

export const Content = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    margin-top: 2rem;
    width: 90%;
    @media (max-width: 850px) {
        flex-direction: column;
        height: 100%;
        align-items: center;
        margin-top: 1rem;
        width: 100%;
    }
`;

export const LeftSide = styled(motion.div)`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    height: 60vh;
    @media (max-width: 850px) {
        height: 100%;
        p {
            text-align: left;
            font-size: clamp(0.5rem, 1.5vh, 8rem);
        }
    }
`;

export const Icons = styled(motion.div)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    svg {
        width: clamp(0.5rem, 8vh, 15rem);
        color: var(--greyblue);
    }
    div {
        margin: 1rem 0 0 3rem;
        font-family: "Poppins_light";
        color: var(--greyblue);
    }
    @media (max-width: 850px) {
        margin: 0.5rem 0;
        svg {
            width: clamp(1.5em, 4vh, 15rem);
            color: var(--greyblue);
        }
        div {
            margin: 0rem 0 0 1rem;
        }
    }
`;

export const RightSide = styled(motion.div)`
    width: 50%;
    /* background: rgba(140, 198, 205, 0.2); */
    height: 100%;
    @media (max-width: 850px) {
        margin-top: 3rem;
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const FormContainer = styled(motion.div)`
    display: flex;
    h2 {
        color: var(--greyblue);
    }
    @media (max-width: 850px) {
        justify-content: center;
        align-items: center;
    }
`;

export const Form = styled(motion.div)`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    font-family: "Poppins_light";
    div {
        display: flex;
        width: 90%;
        justify-content: space-between;
        align-items: center;
    };
    label{
        color: var(--greyblue);
    };
    input {
        padding: 1rem;
        border: 0.2px solid var(--greyblue);
        /* border-radius: 0.5rem; */
        width: 70%;
        margin-bottom: 1rem;
        font-family: "Poppins_light";
        color: var(--greyblue);
        :focus {
            outline: none !important;
            border-color: var(--greyblue);
        }
    }
    .message {
        flex-direction: column;
        align-items: flex-start;
        label {
            margin-bottom: 0.5rem;
        }
        textarea {
            width: 100%;
            height: 8rem;
            margin-bottom: 1rem;
            /* border-radius: 0.5rem; */
            padding: 1rem;
            border: grey;
            font-family: "Poppins_light";
            border: 0.2px solid var(--greyblue);
            color: var(--greyblue);
            :focus {
            outline: none !important;
            border-color: var(--greyblue);
        }
        }
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
    p {
        margin-top: 1rem;
        font-style: italic;
        color: var(--greyblue);
        font-size: clamp(0.4rem, 1.3vh, 8rem);
    }
    @media (max-width: 850px) {
        div {
            width: 100%;
            font-size: clamp(0.7rem, 2vh, 8rem);
        };
        input {
            padding: 0.5rem;
            border: 0.2px solid var(--greyblue);
            border-radius: 0.5rem;
            width: 60%;
            font-size: clamp(0.7rem, 1.5vh, 8rem);
        };
        .message {
            textarea {
                height: 5rem;
                font-size: clamp(0.7rem, 1.5vh, 8rem);
            }
        }
        p {
            margin-top: 0.5rem;
        }
    }
`;