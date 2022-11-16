import React from 'react'
import '../css/common.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import tppLogo from '../images/logo.png';
import bellIcon from '../images/bell.jpg';
import letterIcon from '../images/letter.png';
import settingsIcon from '../images/settings.png';
import userIcon from '../images/user.png';

export const Header = () => {

    return(
        <div className = "Header">
            <Row>
                <Col>
                    <Row>
                        <div className="AppHeader">
                            <img className ="TppLogo" src={tppLogo} alt="Tpp Logo" />
                           OB Choreo Demo App
                        </div>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col></Col>
                        <Col>
                            <Row className="LogoRow">
                                <Col><img className ="Icons" src={settingsIcon} alt="Settings Icon" /></Col>
                                <Col><img className ="Icons" src={letterIcon} alt="Letter Icon" /></Col>
                                <Col><img className ="Icons" src={bellIcon} alt="Bell Icon" /></Col>
                                <Col><img className ="Icons" src={userIcon} alt="User Icon" /></Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}