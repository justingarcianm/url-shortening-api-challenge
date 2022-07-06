import { useState, useEffect } from "react"

import Card from "./Card"
import cardData from "./cardData"

import { CardContainerWrapper } from "./Stats.styled"

const CardContainer = () => {

    const [ data, setData ] = useState([])

    useEffect(() => {
        setData(cardData)
    }, [])

    return <CardContainerWrapper>
        {data.length > 0 && data.map( (item,idx) => {
            return <Card key={idx} content={item}/>
        } )}        
    </CardContainerWrapper>
}

export default CardContainer