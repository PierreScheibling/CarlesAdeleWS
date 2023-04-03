import styled from "styled-components";

export const ExpertiseWrapper = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    background: rgba(140, 198, 205, 0.2);
    z-index: -1;
`;

export const ExpertiseContent = styled.div`
    min-height: 85vh;
    display: flex;
    align-items: center;
`;

export const LeftSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 85vh;
    width: 30%;
    .imgExp {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const RightSide = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 85vh;
    width: 70%;
`;

export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 85vh;
    width: 40%;
    padding: 0 1rem;
    .imgSection {
        width: 100%;
        height: 80%;
        object-fit: cover;
        padding-bottom: 1rem;
    }
`;

export const Text = styled.div`
    background-color: white;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--greyblue);
    h2 {
        font-family: "RoxboroughCF";
        margin: 2rem 0;
        font-size: clamp(0.4rem, 3.5vh, 12rem);
    }
    p {
        font-family: "Poppins_medium";
        margin: 1.5rem 0;
        /* font-size: clamp(0.3rem, 2vh, 8rem); */
    }
`;
