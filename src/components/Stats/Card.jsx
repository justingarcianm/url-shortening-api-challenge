import { CardWrapper } from "./Stats.styled"

const Card = ({content}) => {
    return <CardWrapper alignCard={content.align}>
        <div className="img-wrapper">
            <img src={content.image} alt={content.title} />
        </div>
        <h3>{content.title}</h3>
        <p>{content.body}</p>
    </CardWrapper>
}

export default Card