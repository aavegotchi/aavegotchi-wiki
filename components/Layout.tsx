import Meta from './Meta'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Layout(props) {
  return (
    <Container>

      <Row>
        <Col> </Col>

        <Col xl={12} lg={12} md={10} sm={10} xs={10}>
          <Meta
            siteTitle={props.siteTitle}
            siteDescription={props.siteDescription}
          />

          <div className="content">{props.children}</div>
        </Col>

        <Col></Col>


      </Row>

    </Container>

  );
}