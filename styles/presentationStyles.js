import styled from "styled-components";

export const PresentationWrapper = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
    to top,
    white 0%,
    white 50%,
    rgba(140, 198, 205, 0.2) 50%,
    rgba(140, 198, 205, 0.2) 100%
  );
  z-index: -1;
`;

export const PresentationContent = styled.div`
    min-height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LeftSide = styled.div`
  min-height: 85vh;
  margin-top: -15vh;
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .photoAdCl {
        width: 40%;
        height: 65vh;
        object-fit: cover;
        opacity: 0.8;
    }
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-family: "RoxboroughCF";
    font-weight: lighter;
    font-size: clamp(1.5rem,  6vw, 10rem);
    color: var(--grey);
  }
`;

export const RightSide = styled.div`
    width: 50%;
    margin-top: -15vh;
    padding: 0 4rem;
    p {
        font-size: clamp(0.3rem, 2vh, 8rem);
        font-family: "Poppins_light";
        margin: 1.5rem 0;
        color: var(--grey);
    }
`;