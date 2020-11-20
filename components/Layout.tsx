import Meta from './Meta'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Layout(props) {
  return (


    <div className="content">{props.children}</div>




  );
}