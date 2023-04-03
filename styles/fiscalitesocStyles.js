import styled from "styled-components";

export const FiscaPartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 85vh;
    position: relative;
`;

export const SectionFiscaPart = styled.div`
    display: flex;
    justify-content: center;
    /* align-items: center; */
    min-height: 75vh;
    width: 95%;
`;

export const UpperLine = styled.div`
    height: 0.05rem;
    background: var(--bluelight);
    width: 85%;
    position: absolute;
    top: -4%;
`;

export const SSFiscaPart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;    
    width: 50%;
    padding: 0 1.5rem;
    color: var(--grey);
    div {
        margin: 0.2rem 0;
    }
    h2 {
        font-family: "RoxboroughCF";
        margin: 2rem 0;
        height: 2vw;
    }
    h3 {
        font-family: "Poppins_medium";
        margin-top: 0.5rem;
    }
    p {
        font-family: "Poppins_light";
        line-height: 190%;
        font-size: clamp(0.3rem, 1.6vh, 8rem);
    }
    ul {
        padding-left: 1.5rem;
    }
    span {
        text-decoration: underline;
    }
`;

export const Underlign = styled.div`
    height: 1px;
    background: var(--bluelight);
    width: 12%;
`;

export const Line = styled.div`
    margin: 2rem 3rem 0 3rem;
    height: 65vh;
    background: black;
    width: 0.05rem;
`;

export const BottomFiscaPart = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    margin-right: 5%;
    position: relative;
    height: 10vh;
    h1 {
        font-family: "RoxboroughCF";
        font-size: clamp(0.5rem, 8vh, 15rem);
        color: var(--grey);
        font-weight: lighter;
    }
    div {
        z-index: -1;
        position: absolute;
        bottom: 0;
        left: 0;
        background: rgba(140, 198, 205, 0.2);
        height: 55%;
        width: 70%;
    }
`;