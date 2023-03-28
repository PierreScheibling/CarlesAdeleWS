import styled from "styled-components";

export const NavStyles = styled.div`
    min-height: 15vh;
    width: 100%;
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    list-style: none;
    ul {
        width: 80%;
        display: flex;
        justify-content: space-between;
        list-style: none;
        font-size: clamp(0.4rem, 2.5vh, 12rem);
        color: var(--primary);
    }
`;

export const Logo = styled.div`
    position: absolute;
    left: -5%;
`;

export const Reseau = styled.div`
    position: absolute;
    right: -3%;
    ul {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
    }
`;