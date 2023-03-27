import styled from "styled-components";

export const NavStyles = styled.div`
    min-height: 15vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    ul {
        width: 80%;
        display: flex;
        justify-content: space-between;
        list-style: none;
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