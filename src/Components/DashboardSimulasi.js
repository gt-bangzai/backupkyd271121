import React from 'react'
import Navbar from './Atoms/Navbar/navbar_dash'
import { Container } from 'react-bootstrap'
// import DashUs from './Layouts/User.dashboard'
// import DashSim from './Layouts/User.simulasi'
// import DashUs from './Layouts/User.tampil'
import Foot from './Atoms/Footer/footer.login'


class DashSimulasi extends React.Component {
    render() {
        return (
            <Container fluid id="main-component">
                <Navbar />     
                <DashSimulasi /> 
                <Foot />    
            </Container>
        )
    }
}

export default DashSimulasi