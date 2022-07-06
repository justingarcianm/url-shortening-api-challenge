
import Boost from './bg-boost-desktop.svg'
import { CTAWrapper } from './CTA.styled'

import { Container, Button } from '../../global.styled'

const CTA = () => {
    return <CTAWrapper background={Boost}>
        <Container>
            <h2>Boost your links today</h2>
            <Button href="#">Get Started</Button>
        </Container>
    </CTAWrapper>
}

export default CTA