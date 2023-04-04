import styled from "styled-components";

export const MentionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        font-family: "RoxboroughCF";
        font-weight: lighter;
        color: var(--grey);
    }
    h2 {
        font-family: "RoxboroughCF";
        font-weight: lighter;
        color: var(--grey);
    }
    li {
        list-style: none;
    }
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem 3rem;
    font-family: "Poppins_light";
`;

export const Section = styled.div`
    h3 {
        margin-top: 1.5rem;
    }
    p {
        margin: 0.5rem 0;
    }
    span{
        font-weight: bolder;
        color: var(--black);
        font-style: italic;
    }
`;

export const Underlign = styled.div`
    height: 1px;
    background: var(--bluelight);
    width: 12%;
    margin-bottom: 1.5rem;
`;