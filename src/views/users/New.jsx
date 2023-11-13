import { Button, Container, Form } from "react-bootstrap"

const NewUser = (props) => {
    return (
        <Container>
            <div className="text-center">
                <img src="../logo.png" height='400' alt='100'/>
            </div>
            <Form>
                <Form.Group className ="mb-3">
                    <Form.Label className="text-light">Nome:</Form.Label>
                    <Form.Control className="bg-dark text-light"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="text-light">Idade:</Form.Label>
                    <Form.Control type="number" className="bg-dark text-light"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="text-light">Telefone:</Form.Label>
                    <Form.Control className="bg-dark text-light"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="text-light">Senha:</Form.Label>
                    <Form.Control type="password"  className="bg-dark text-light"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="text-light">Confirmaçãod de senha:</Form.Label>
                    <Form.Control type="password"  className="bg-dark text-light"/>
                </Form.Group>

                <div className="text-center">
                    <Button variant="outline-danger" size="lg" href='/' style={{ marginRight: '20px' }}>Cancelar</Button>
                    <Button variant="outline-primary" size="lg" href='/profile'>Cadastrar</Button>
                </div>
            </Form>
        </Container>
    )
}

export default NewUser