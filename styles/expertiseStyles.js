import styled from "styled-components";

export const ExpertiseWrapper = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(140, 198, 205, 0.2);
    z-index: -1;
`;

export const ExpertiseContent = styled.div`
    min-height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Section = styled.div`
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ImageExpWrapper = styled.div`
    width: 50%;
`;

export const ExpertiseText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
        font-family: "RoxboroughCF";
    }
    p {
        font-family: "Poppins_medium";
    }
`;