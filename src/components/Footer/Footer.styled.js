import styled from "styled-components";

export const FooterWrapper = styled.footer`
    background-color:var(--very-dark-violet);
    padding:4rem 0;
`

export const FooterInnerWrapper = styled.div`
display: grid;
grid-template-columns:2fr 3fr 1fr;
gap:1rem;

& * {
    color:#fff;
}

& a:hover,
& .footer-social img {
    color:var(--blue);
}

& .footer-links {
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    gap:1rem;
    
    & h4 {
        
        margin-bottom:1rem;
    }
    & ul {
        list-style:none;
        

        & li {
            margin: 0.5rem 0;

            & a {
                font-weight:400;
            }
        }
    }
}

& .footer-social {
    justify-self:end;

    & a {
        margin:0 .75rem;
    }
}
`