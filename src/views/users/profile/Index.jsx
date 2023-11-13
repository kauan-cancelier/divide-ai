import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import BottonNavigator from "../../../components/BottonNavigator";

const ProfileIndex = (props) => {

  const images = [
    "https://via.placeholder.com/1080x1080",
    "https://via.placeholder.com/1080x1080",
    "https://via.placeholder.com/1080x1080",
    "https://via.placeholder.com/1080x1080",
    "https://via.placeholder.com/1080x1080",
    "https://via.placeholder.com/1080x1080",
  ];

  return (
    <Container style={{ color: 'white', marginTop: '50px', marginBottom: '10vh' }}>
      <h1>Perfil</h1>

      <div className="text-center">
        <Image
          src="https://cloudfront-us-east-1.images.arcpublishing.com/estadao/PTBYNC7LC5N37NDR6XGAF7EVEQ.jpg"
          alt={1}
          width={400} 
          height={400}
          roundedCircle
        />
      </div>


      <br />

      <div className="text-center">
        <h2>Kauan Cancelier</h2>
        <p>Cursando engenharia de navios</p>
      </div>
      <br />

      <Card bg="dark" text="light">
        <Card.Body>
          <h2>Disponibilidade para morar</h2>
          <p>Florianópolis</p>

          <br />

          <h2>Localidade</h2>
          <p>Tubarão, Santa Catarina</p>

          <br />

          <h2>Idade:</h2>
          <p>26 anos</p>
        </Card.Body>
      </Card>
      <br />
      <br />

      <h2>Sobre você</h2>
      <br />
      <Card bg="dark" text="light">
        <Card.Body>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            nec fermentum justo. Donec eleifend pharetra diam non eleifend.
            Integer non diam odio. Donec blandit tempor porta. Pellentesque
            est mauris, molestie in tortor ac, imperdiet fermentum leo.
            Mauris rhoncus risus dapibus eros eleifend, eget lobortis dui
            imperdiet. Cras in condimentum ipsum. Suspendisse eu turpis sed
            lacus tincidunt luctus vel non ligula. Etiam blandit purus sit
            amet ex volutpat, quis dapibus justo scelerisque. Sed pharetra
            leo id erat dictum, sed pulvinar metus efficitur. Curabitur
            iaculis augue felis, id sagittis dui placerat non. Quisque
            bibendum semper rhoncus.
          </p>
        </Card.Body>
      </Card>
      <br />
      <br />

      <h2>Avaliações</h2>
      <br />
      <Card bg="dark" text="light">
        <Card.Body>
          <h2>Luiz Fernando Goulart:</h2>
          <p>Ótimo companheiro de quarto, organizado e gentil</p>

          <h2>Luiz Fernando Goulart:</h2>
          <p>Não obtive boas relações jogando com ele, mas total respeito!</p>
        </Card.Body>
      </Card>
      <br />
      <br />
      <br />


      <Row xs={1} md={3} className="g-4">
        {images.map((image, index) => (
          <Col key={index}>
            <Image src={image} thumbnail fluid />
          </Col>
        ))}
      </Row>
      <BottonNavigator />
    </Container>
  );
};

export default ProfileIndex;
