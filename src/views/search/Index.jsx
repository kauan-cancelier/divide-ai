import { Button, Card, Container, Form } from "react-bootstrap"
import foto from "./fotoBusca.png"
import BottomNavbar from "../../components/BottonNavigator"

const SearchIndex = (props) => {
    return (
        <Container>
            <div className="text-center text-light mt-5">
                <h1>Encontre seu parceiro</h1>
                <img src={foto} alt="" />
            </div>


            <Card bg="dark" className="mt-5">
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label className="text-light">Para onde?</Form.Label>
                            <Form.Control type="email" className="bg-dark text-light" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label className="text-light">Com quantas pessoas?</Form.Label>
                            <Form.Control type="password" className="bg-dark text-light" />
                        </Form.Group>

                        <div className="text-center d-grid gap-1">
                            <Button variant="primary" href='/users/new'>Buscar</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
            <BottomNavbar/>
        </Container>
    )
}

export default SearchIndex
