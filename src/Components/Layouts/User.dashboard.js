import React from 'react'
import { connect } from 'react-redux'
import { getDebitur } from '../../Actions/kpr'
import { Container, Row, Col } from 'react-bootstrap'
import Sidemenu from '../Atoms/Sidemenu'
import Spin from '../Atoms/Spinner'
import Badge from 'react-bootstrap/Badge'
// import ProgressBar from 'react-bootstrap/ProgressBar'


class Userdashboard extends React.Component {
    componentDidMount() {
        this.props.getInfoDbt()
        // console.log(this.props.getDebiturs)
    }

    componentDidUpdate() {
        // console.log(this.props.getDebiturs.result.idrumah.developer.namadeveloper)
        // console.log(this.props.getDebiturs)
        // this.props.getInfoDbt()
    }
    render() {
        return (
            <Container fluid id="bg-dashburd">
                <Row className="wrapper-dashburd">
                    <Sidemenu />
                    <Col md="9">
                        <Row className="wrapper-side-right">
                            <Col md="12">
                                <h2 className="title-dashburd">DASHBOARD</h2>
                                {/* <Spinner animation="border" variant="warning" /> */}
                                {<Spin loading={this.props.isLoading} />}

                            </Col>
                            <Col md="12" className="wrapper-side-right1">
                                <br></br>
                                {/* <h2 align="right"><Badge bg="warning">{this.props.getDebiturs.statuskredit}</Badge></h2> */}
                                {/* <h2 align="right">{this.props.getDebiturs.statuskredit}</h2> */}
                                <br></br>
                                {/* ISIAN DARI API */}
                                <Row>
                                    <Col md="9">
                                       
                                    </Col>

                                    <Col md="3">
                                        <Row>
                                            {/* <Col md="12"><h2 align="right"><Badge bg="warning">{this.props.getDebiturs.statuskredit}</Badge></h2></Col> */}
                                            <Col md="12"><h4><Badge bg="warning">{this.props.getDebiturs.statuskredit}</Badge></h4></Col>
                                            <Col md="12"> Tempat Gambar Rumah TBI</Col>
                                        </Row>
                                    </Col>
                                    <Col md="9">
                                        <Row>
                                        <br></br>
                                        <Col md="5" >Nama Properti</Col>
                                        <Col md="1">:</Col>
                                        <Col md="6"> {this.props.getDebiturs !== '' ? this.props.getDebiturs.result.idrumah.namarumah : null}</Col>
                                        </Row>
                                    </Col>
                                    
                                    <Col md="9">
                                        <Row>
                                        <br></br>
                                        <Col md="5" >Harga Rumah</Col>
                                        <Col md="1">:</Col>
                                        <Col md="6"> Rp. {this.props.getDebiturs !== '' ? this.props.getDebiturs.result.idrumah.harga : null}</Col>
                                        </Row>
                                    </Col>
                                    
                                    <Col md="9">
                                        <Row>
                                        <Col md="5" >Developer</Col>
                                        <Col md="1">:</Col>
                                        <Col md="6">{this.props.getDebiturs !== '' ? this.props.getDebiturs.result.idrumah.developer.namadeveloper : null}</Col>
                                        </Row>
                                    </Col>
                                   
                                    <Col md="9">
                                        <Row>
                                        <Col md="5" >Detail Exterior</Col>
                                        <Col md="1">:</Col>
                                        <Col md="6">Type {this.props.getDebiturs !== '' ? this.props.getDebiturs.result.idrumah.tipe : null},
                                        Luas Tanah {this.props.getDebiturs !== '' ? this.props.getDebiturs.result.idrumah.luas_tanah : null}
                                        M, Luas Bangunan {this.props.getDebiturs !== '' ? this.props.getDebiturs.result.idrumah.luas_bangunan : null}M</Col>
                                        </Row>
                                    </Col>
                                  
                                    <Col md="9">
                                        <Row>
                                        <Col md="5" >Detail Interior</Col>
                                        <Col md="1">:</Col>
                                        <Col md="6">{this.props.getDebiturs !== '' ? this.props.getDebiturs.result.idrumah.legalitas : null}, Jumlah Kamar
                                        {this.props.getDebiturs !== '' ? this.props.getDebiturs.result.idrumah.jumlah_kamar : null}, PLN
                                        {this.props.getDebiturs !== '' ? this.props.getDebiturs.result.idrumah.listrik : null}, PDAM :
                                        {this.props.getDebiturs !== '' ? this.props.getDebiturs.result.idrumah.pdam : null}</Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>

                            <Col md="12" className="wrapper-side-right2">
                                <h2>SEJARAH KPR</h2>
                                <h2 align="left"><Badge bg="warning">Belum Ada</Badge></h2>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapsStateToProps = (state) => ({
    isLoading: state.rumahReducer.isLoading,
    getDebiturs: state.rumahReducer.debitur
})

const mapsDispatchToProps = (dispatch) => {
    return {
        getInfoDbt: () => dispatch(getDebitur())
    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(Userdashboard)