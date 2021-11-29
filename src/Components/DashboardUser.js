import React from 'react'
import Navbar from './Atoms/Navbar/navbar_dash'
import { Container } from 'react-bootstrap'
import DashUs from './Layouts/User.dashboard'
// import DashUs from './Layouts/User.tampil'
import Foot from './Atoms/Footer/footer.login'
// import Simulasi from './calculator/Simulasi'

class DashUser extends React.Component {
    render() {
        return (
            <Container fluid id="main-component">
                <Navbar />     
                <DashUs /> 
                {/* <Simulasi /> */}
                <Foot />    
            </Container>
        )
    }
}

export default DashUser