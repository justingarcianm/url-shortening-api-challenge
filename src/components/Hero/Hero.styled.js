import styled from "styled-components";

export const HeroWrapper = styled.div`
    min-height:30vw;
    display:grid;
    align-items:center;
    grid-template-columns:2fr 1fr;
    
    & p {
        color:var(--gray-violet);
        font-size:22px;
        line-height:32px;
    }

    & a {
        font-size:20px;
    }

    & .hero-image {
        position:absolute;
        right:-5%;
        top:50%;
        transform:translateY(-50%);
        z-index:-1;

        & img {
            width: 50vw;
        }
    }
`