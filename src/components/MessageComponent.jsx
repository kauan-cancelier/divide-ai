import { Col, Image, Row } from "react-bootstrap";

const MessageComponent = ({ name, message, imageUrl, newMessages }) => {
  return (
    <Row>
      <Col xs={12} md={3} className="text-center position-relative">
        <Image
          src={imageUrl}
          alt={name}
          width={130}
          height={100}
          roundedCircle
          fluid
        />
      </Col>

      <Col xs={12} md={9} className="position-relative">
        <h2>{name}</h2>
        <p>{message}</p>

        {newMessages > 0 && (
          <div
            style={{
              position: "absolute",
              top: "50%", 
              right: 0,
              transform: "translateY(-50%)", 
              width: "30px",
              height: "30px",
              backgroundColor: "green",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: "14px",
            }}
          >
            {newMessages}
          </div>
        )}
      </Col>
    </Row>
  );
};

export default MessageComponent;
