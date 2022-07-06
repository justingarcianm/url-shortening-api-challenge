import styled from "styled-components";

export const NavWrapper = styled.div`
    position:relative;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 2rem 0;

    & .left-nav {
        display:flex;
        justify-content:flex-start;
        align-items:center;
        gap:2rem;
    }

    & .desktop-nav {
        color:var(--gray-violet);

        &:hover {
            color:var(--very-dark-violet);
        }
    }

    & .right-nav {
        display:flex;
        justify-content:flex-end;
        align-items:center;
        gap:2rem;
    }
`

export const MobileWrapper = styled.div`
    display:none;

    & .menu-toggle {
        cursor:pointer;
    }

    & .mobile-nav-list {
        // display:flex;
        display:none;
        flex-direction: column;
        text-align:center;
        gap:2rem;
        background-color: var(--dark-violet);
        color:#fff;
        padding: 2rem;
        border-radius:25px;
        position:absolute;
        top:100%;
        right:0;

        & .mobile-nav:hover {
            color: var(--light-blue);
        }
    }
`