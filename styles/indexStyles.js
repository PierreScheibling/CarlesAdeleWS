import styled from "styled-components";

export const IndexWrapper = styled.div`
    min-height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const Text = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Poppins_light";
    color: var(--bluelight);
    border-top: solid 1px var(--grey);
    width: 80%;
    h1{
        font-size: clamp(0.5rem, 4vh, 12rem);
        padding: 2rem;
    }
`;
