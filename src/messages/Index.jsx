import { Container } from "react-bootstrap"
import BottonNavigator from "../components/BottonNavigator"
import MessageComponent from "../components/MessageComponent"

const MessagesIndex = (props) => {
    return (
        <Container style={{ color: 'white', marginTop: '50px', marginBottom: '10vh' }}>
            <h1>Caixa de entrada</h1>
            <br />
            <MessageComponent
                name="Alex dos Santos"
                message="Eaí, tudo certo para nos mudarmos?? :D"
                imageUrl="https://cloudfront-us-east-1.images.arcpublishing.com/estadao/PTBYNC7LC5N37NDR6XGAF7EVEQ.jpg"
                newMessages={1}
            />
            <br />
            <MessageComponent
                name="Alex dos Santos"
                message="Eaí, tudo certo para nos mudarmos?? :D"
                imageUrl="https://cloudfront-us-east-1.images.arcpublishing.com/estadao/PTBYNC7LC5N37NDR6XGAF7EVEQ.jpg"
                newMessages={1}
            />
            <BottonNavigator/>
        </Container>
    )
}

export default MessagesIndex