import Meta from './Meta'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Layout(props) {
  return (
    <Container>

      <Row>

        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <Meta
            siteTitle={props.siteTitle}
            siteDescription={props.siteDescription}
          />

          <div className="content">{props.children}</div>
        </Col>



      </Row>

    </Container>

  );
}