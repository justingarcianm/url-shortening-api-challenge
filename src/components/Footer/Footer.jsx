import { FooterWrapper, FooterInnerWrapper } from "./Footer.styled"

import { Container } from "../../global.styled"
import Logo from '../Nav/logo.svg'
import Twitter from './icon-twitter.svg'
import Facebook from './icon-facebook.svg'
import Instagram from './icon-instagram.svg'
import Pinterest from './icon-pinterest.svg'

const Footer = () => {
    return <FooterWrapper>
        <Container>
            <FooterInnerWrapper>
                <a href="#" className="logo">
                    <img src={Logo} alt="Shortly Logo"/>
                </a>

                <div className="footer-links">
                <div className="column">
                        <h4>Features</h4>
                        <ul>
                            <li><a href="#">Link Shortening</a></li>
                            <li><a href="#">Branded Links</a></li>
                            <li><a href="#">Analytics</a></li>
                        </ul>
                    </div>
                    <div className="column">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Developers</a></li>
                            <li><a href="#">Support</a></li>
                        </ul>
                    </div>
                    <div className="column">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Our Team</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-social">
                    <a href="#">
                        <img src={Facebook} alt="Facebook Icon" />
                    </a>
                    <a href="#">
                        <img src={Twitter} alt="Twitter Icon" />
                    </a>
                    <a href="#">
                        <img src={Pinterest} alt="Pinterest Icon" />
                    </a>
                    <a href="#">
                        <img src={Instagram} alt="Instagram Icon" />
                    </a>
                </div>

            </FooterInnerWrapper>
        </Container>
    </FooterWrapper>
}

export default Footer