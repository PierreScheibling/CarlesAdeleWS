import styled from "styled-components";

export const FooterStyles = styled.div`
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    position: relative;
    font-family: "Poppins_light";
`;

export const Line = styled.div`
    position: absolute;
    top: 0;
    height: 0.1rem;
    width: 80%;
    background: var(--bluelight);
`;

export const Annexes = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

`;

export const Copywright = styled.div`
    span {
        font-size: clamp(0.3rem, 1.8vh, 8rem);;
    }
`;
