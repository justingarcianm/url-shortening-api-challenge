import styled from "styled-components";
import { motion } from "framer-motion";

export const StatsSection = styled.section`
    background-color:var(--light-gray);
`

export const StatsCopy = styled.div`
    text-align:center;

    & p {
        color:var(--gray-violet);
    }
`

export const CardContainerWrapper = styled(motion.div)`
padding-top:4rem;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap:2rem;
    height:17vw;
    position:relative;

    &:before {
        content:'';
        position:absolute;
        left:0;
        right:0;
        top:50%;
        transform:translateY(-50%);
        z-index:1;
        height:10px;
        width:100%;
        background-color:var(--blue);
    }
`

export const CardWrapper = styled(motion.article)`
    background-color:#fff;
    padding:4rem 2rem 2rem;
    border-radius:10px;
    align-self:${props => props.aligncard};
    z-index:2;
    position:relative;

    & .img-wrapper {
        position:absolute;
        top:-15%;
        left:2rem;
        background-color:var(--dark-violet);
        padding: 1rem;
        border-radius:50%;
        display:grid;
        place-items:center;

        & img {
            aspect-ratio: 1 / 1;
            object-fill:cover;
            max-width:90%;
        }
    }
`