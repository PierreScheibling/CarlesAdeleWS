import styled from "styled-components";

export const FooterStyles = styled.div`
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
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
