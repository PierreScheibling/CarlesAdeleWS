import styled from "styled-components";

export const NavStyles = styled.div`
    z-index: 10;
    min-height: 15vh;
    width: 100%;
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    list-style: none;
    font-family: "Versailles";
    ul {
        width: 80%;
        display: flex;
        justify-content: space-between;
        list-style: none;
        font-size: clamp(0.4rem, 2.5vh, 12rem);
        color: var(--greyblue);
    }
`;

export const Logo = styled.div`
    position: absolute;
    left: 0;
    height: 100%; 
    .imgNav{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
`;