import React from 'react'
import { Button, Card, Container, ListGroup } from 'react-bootstrap'
import './ContractShow.css'
import BottomNavbar from '../../components/BottonNavigator'

const ContractShow = (props) => {
    return (
        <Container style={{ color: 'white', marginTop: '50px', marginBottom: '10vh' }}>
            <h1>Edifício Milano</h1>
            <Card bg="dark" text="light">
                <Card.Body>
                    <div className="d-grid gap-1">
                        <Button variant="dark" className="custom-button">
                            Renovar plano
                        </Button>
                        <Button variant="dark" className="custom-button">
                            Assinatura
                        </Button>
                        <Button variant="dark" className="custom-button">
                            Locatório
                        </Button>
                    </div>

                    <div className="text-center">
                        <h4 className="mt-3 mb-3">Detalhes</h4>
                    </div>

                    <hr />

                    <ListGroup className="bg-dark">
                        <ListGroup.Item className="bg-dark text-light">
                            <b>Status:</b> <span style={{ color: 'green' }}>Ativo</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="bg-dark text-light">
                            <b>Duração:</b> 12 meses, termina em 10/03/2023
                        </ListGroup.Item>
                        <ListGroup.Item className="bg-dark text-light">
                            <b>Valor total:</b> R$ 1854,00
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>

                <div className="d-grid">
                    <Button variant="outline-none" style={{ color: 'red' }} >
                        Cancelar plano
                    </Button>
                </div>
            </Card>
            <BottomNavbar />
        </Container>
    )
}

export default ContractShow;
