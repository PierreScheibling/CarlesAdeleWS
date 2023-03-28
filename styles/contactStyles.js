import styled from "styled-components";

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 85vh;
`;

export const FormContainer = styled.div`
    display: flex;
    background: grey;
    width: 50%;
    padding: 1rem 2rem;
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    label{
        display: block;
        padding-bottom: 0.2rem;
    };
    input {
        padding: 1rem;
        border: grey;
        border-radius: 0.5rem;
        width: 50%;
        margin-bottom: 1rem;
    }
`;