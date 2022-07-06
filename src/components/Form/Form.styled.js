import styled from "styled-components";
import { motion } from "framer-motion";

export const FormSection = styled.section`
    background:linear-gradient(to bottom, #fff 50%, hsl(231, 28%, 95%) 50%);
`

export const FormWrapper = styled.div`
    background-image:url(${props => props.background});
    background-position: center;
    background-repeat:no-repeat;
    background-size:cover;
    padding:4rem;
    border-radius:10px;
    color:#fff;
    background-color: var(--dark-violet);
`

export const LoadingWrapper = styled.div`

`

export const InnerFormWrapper = styled.form`
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:1rem;

    & > * {
        padding:1rem;
        border-radius:10px;
        font-size:18px;
        outline:none;
        border:none;
    }

    & input {
        flex-grow:2;

        &:placeholder {
            color: var(--gray);
            font-family: 'Poppins', sans-serif;
        }
    }

    & button {
        color:#fff;
        background:var(--blue);
        font-weight:700;
        padding:1rem 2rem;
    }
`