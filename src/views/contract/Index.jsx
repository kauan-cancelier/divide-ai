import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import BottonNavigator from "../../components/BottonNavigator";

const generateCards = (count) => {
    const cards = [];
    for (let i = 0; i < count; i++) {
        cards.push(
            <Card key={i} bg="dark" text="light" className="rounded mb-5">
                <Row>
                    <Col md={3} className="ml-md-auto">
                        <a href="/contracts/show">
                            <Image src="https://via.placeholder.com/1080x1080" fluid rounded />
                        </a>
                    </Col>
                    <Col md={5}>
                        <Card.Body>
                            <a href="/contracts/show" style={{textDecoration: 'none', color: 'white'}}>
                                <h2>Edifício Por do Sol</h2>
                            </a>
                            <p>De 18 de março de 2020 até 10 de março de 2023</p>
                            <label>Junto com Alex</label>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        );
    }
    return cards;
}

const ContractIndex = (props) => {
    return (
        <Container style={{ color: 'white', marginTop: '50px', marginBottom: '10vh' }}>
            <h1 className="mt-5 mb-5">Contratos</h1>
            {generateCards(3)}
            <BottonNavigator />
        </Container>
    )
}

export default ContractIndex
