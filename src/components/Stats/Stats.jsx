import { Container } from "../../global.styled"
import { StatsSection, StatsCopy } from "./Stats.styled"

import CardContainer from "./CardContainer"

const Stats = () => {
    return <StatsSection>
        <Container>
        <StatsCopy>
            <h2>Advanced Statistics</h2>
            <p>Track how your links are performing across the web<br/> with
our advanced statistics dashboard.</p>
        </StatsCopy>

        <CardContainer />
        </Container>

    </StatsSection>
}

export default Stats