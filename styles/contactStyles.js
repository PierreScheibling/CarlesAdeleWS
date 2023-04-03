import styled from "styled-components";

export const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 85vh;
`;

export const Title = styled.div`
    h1 {
        font-family: "RoxboroughCF";
        font-weight: lighter;
        color: var(--greyblue);
        font-size: clamp(0.5rem, 7vh, 15rem);
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 75vh;
    margin-top: 2rem;
    width: 90%;
`;

export const LeftSide = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80%;
`;

export const Icons = styled.div`
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
`;

export const RightSide = styled.div`
    width: 50%;
    /* background: rgba(140, 198, 205, 0.2); */
    height: 100%;
`;

export const FormContainer = styled.div`
    display: flex;
    h2 {
        color: var(--greyblue);
    }
`;

export const Form = styled.div`
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
        border-radius: 0.5rem;
        width: 70%;
        margin-bottom: 1rem;
        font-family: "Poppins_light";
        color: var(--greyblue);
    }
    .message {
        flex-direction: column;
        align-items: flex-start;
        label {
            margin-bottom: 0.5rem;
        }
        textarea {
            width: 100%;
            height: 5rem;
            margin-bottom: 1rem;
            border-radius: 0.5rem;
            padding: 1rem;
            border: grey;
            font-family: "Poppins_light";
            border: 0.2px solid var(--greyblue);
            color: var(--greyblue);
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
    }
`;