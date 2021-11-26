import React from 'react'
import { Container, Col, Row, NavLink } from 'react-bootstrap'
import logoBlack from '../../../Assets/images/logoblack.png'
import HaloBukopin from '../../../Assets/images/halo-kbnbg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

class Foot extends React.Component {
    render(){
        return(
            <Container fluid>
                <Row className="footer">
                    <Col md="4">
                        <NavLink href="#simulasi"><strong>SIMULASI KPR</strong></NavLink>
                        <NavLink href="https://www.bukopin.co.id"><strong>ABOUT US</strong></NavLink>
                        <NavLink href="https://wa.me/6281224301321"><strong>CONTACT</strong></NavLink>
                        <img className="logoBlack" src={logoBlack} alt="LogoBlack" />
                    </Col>
                    <Col md="4">
                        <p>KANTOR PUSAT</p>
                        <p>Jl. MT. Haryono Kav. 50-51</p>
                        <p>Jakarta 12770</p>
                        <p>Phone. +6221 798 8266, 798 9837</p>
                        <p>Fax. +6221 798 0625, 798 0238, 798 0244</p>
                        <Row className="wrap-connect">
                            <Col md="3" className="style-connect"><p>Connect</p></Col>
                            <Col md="1" className="style-iconbrand"><FontAwesomeIcon icon={faFacebook} size='2x' href="https://www.facebook.com/bukopinsiaga"/></Col>
                            <Col md="1" className="style-iconbrand"><FontAwesomeIcon icon={faTwitter} size='2x'  href="https://twitter.com/kbbukopin"/></Col>
                            <Col md="1" className="style-iconbrand"><FontAwesomeIcon icon={faYoutube} size='2x' href="https://www.youtube.com/user/SiagaBukopin" /></Col>
                            <Col md="1" className="style-iconbrand"><FontAwesomeIcon icon={faInstagram} size='2x' href="https://www.instagram.com/kbbukopin/"/></Col>
                        </Row>
                    </Col>
                    <Col md="4" className="logoBukopin">
                    <img src={HaloBukopin} alt="Halo Bukopin" />
                    </Col>
                </Row>
                <Row className="footer-dark">
                    <Col md="12">
                        <p>Copyright &copy; PT BANK KB BUKOPIN 2021 All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Foot
