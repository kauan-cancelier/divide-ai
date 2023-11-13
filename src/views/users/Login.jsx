import { Button, Container, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  return (
    <Container >
        <div>
        <div className="text-center">
            <img src="../logo.png" height='400' alt='100'/>
        </div>
            <Form>
                <Form.Group className ="mb-3" controlId="formGroupEmail">
                    <Form.Label className="text-light">Email:</Form.Label>
                    <Form.Control type="email" className="bg-dark text-light" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label className="text-light">Senha:</Form.Label>
                    <Form.Control type="password" className="bg-dark text-light"/>
                </Form.Group>

                <div className="text-center">
                    <Button variant="outline-primary" size="lg" href='/' style={{ marginRight: '20px' }}>Entrar</Button>
                    <Button variant="outline-light" size="lg" href='/users/new'>Cadastrar-se</Button>
                </div>
            </Form>
        </div>
    </Container>

  );
}

export default Login;