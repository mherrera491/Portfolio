import { Container, Row, Col } from 'react-bootstrap'

export default function Footer(props) {
    return (
        <footer className="mt-5 p-3 bg-dark text-white">
          <Container>
            <Row>
              <Col>
                &copy; 2024 Matthew Herrera
              </Col>
            </Row>
          </Container>
        </footer>
      );
}