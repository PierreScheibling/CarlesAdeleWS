import styled from "styled-components";

export const HonorairesWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-height: 85vh;
    position: relative;
`;

export const BackgroundHono = styled.div`
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    min-height: 100vh;
    background: rgba(140, 198, 205, 0.2);
`;

export const LeftSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 50%;
    min-height: 85vh;
    h1 {
        margin-top: 1rem;
        font-family: "RoxboroughCF";
        color: var(--greyblue);
        font-size: clamp(0.5rem, 10vh, 15rem);
        font-weight: lighter;
    }
`;

export const RightSide = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 50%;
    min-height: 85vh;
    padding: 0 4rem;
    margin-top: 1rem;
    div {
        margin-top: 0.5rem;
    }
    p {
        font-size: clamp(0.3rem, 2vh, 8rem);
        font-family: "Poppins_light";
        margin: 0.7rem 0;
        color: var(--grey);
    }
    li {
        margin-left: 1rem;
    }
`;

export const Line = styled.div`
    position: relative;
    left: -20%;
    background: var(--black);
    height: 0.05rem;
    width: 100%;
`;