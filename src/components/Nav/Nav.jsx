import Logo from './logo.svg'
import MobileMenu from './MobileMenu'

import { Container, Button } from '../../global.styled'
import { NavWrapper } from './Nav.styled'

const Nav = () => {
    return <header>
        <Container>
            <NavWrapper>
                <div className="left-nav">
                    <a href="/" className="logo">
                        <img src={Logo} alt="Shortly Logo" />
                    </a>
                    <a href="#" className='desktop-nav'>Features</a>
                    <a href="#" className='desktop-nav'>Pricing</a>
                    <a href="#" className='desktop-nav'>Resources</a>
                </div>
                <div className="right-nav">
                    <a className='desktop-nav' href="#">Login</a>
                    <Button href="#">Sign Up</Button>

                        <MobileMenu />

                </div>
            </NavWrapper>
        </Container>
    </header>
}

export default Nav