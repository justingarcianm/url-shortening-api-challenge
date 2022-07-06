import { CgMenu } from 'react-icons/cg'
import { Button } from '../../global.styled'
import { MobileWrapper } from './Nav.styled'

const MobileMenu = () => {
    return <MobileWrapper>
        <span className='menu-toggle'>
            <CgMenu />
        </span>
        <div className='mobile-nav-list'>
            <a href="#" className="mobile-nav">Features</a>
            <a href="#" className="mobile-nav">Pricing</a>
            <a href="#" className="mobile-nav">Resources</a>
            <hr/>
            <a href="#" className="mobile-nav">Login</a>
            <Button href='#'>Sign Up</Button>
        </div>
    </MobileWrapper>
}

export default MobileMenu