import Working from './illustration-working.svg'
import { Container, Button } from '../../global.styled'

import { HeroWrapper } from './Hero.styled'

const Hero = () => {
    return  <section>
            <Container>
        <HeroWrapper>
            <div className='hero-copy'>
                <h1>More than just<br/> shorter links</h1>
                <p>Build your brand's recognition and get detailed <br/>insights on how your links are performing.</p>
                <br/>
                <Button href='#'>
                    Get Started
                </Button>
            </div>

            <div className='hero-image'>
                <img src={Working} alt="More than just shorter links" />
            </div>

        </HeroWrapper>
            </Container>
    </section>
}

export default Hero