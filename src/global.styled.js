import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { motion } from "framer-motion";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');

    :root {
        --blue:hsl(180, 66%, 49%);
        --light-blue:hsl(179, 56%, 75%);
        --dark-violet:hsl(257, 27%, 26%);
        --red:hsl(0, 87%, 67%);
        --gray:hsl(0, 0%, 75%);
        --gray-violet:hsl(257, 7%, 63%);
        --light-gray:hsl(231, 28%, 95%);
        --very-dark-blue:hsl(255, 11%, 22%);
        --very-dark-violet:hsl(260, 8%, 14%);
    }

    *,
    *:before,
    *:after {
        box-sizing:border-box;
        padding:0;
        margin:0;
    }

    body {
        font-family: 'Poppins', sans-serif;
        overflow-x:hidden;
    }

    section {
        position:relative;
        padding:4rem 0;
    }

    h1 {
        font-size:6rem;
        font-weight:700;
        color:var(--very-dark-violet);
    }

    h2 {
        font-size:2.5rem;
        font-weight:700;
        color:var(--very-dark-violet);
    }

    h3 {
        font-size:1.5rem;
        font-weight:700;
        color:var(--very-dark-violet);
    }

    p,
    p a {
        font-size:18px;
        line-height: 28px;
        font-weight:400;
        margin:1rem 0;
    }

    a {
        font-weight:700;
        font-size:16px;
        transition: all ease 300ms;
        color:inherit;
        text-decoration:none;
    }
    img {
        max-width:100%;
    }

    .logo {
        width:fit-content;
        height:min-content;
    }

`

export default GlobalStyle

export const mobileBreak = `(max-width:900px)`

export const Button = styled(motion.a)`
    background-color:var(--blue);
    padding:.625rem 1.825rem;
    border-radius:25px;
    color:#fff;

    &:hover,
    &:target,
    &:focus {
        background-color:var(--light-blue);
    }
`


export const Container = styled.div`
    width:95%;
    max-width:1440px;
    margin: 0 auto;
` 