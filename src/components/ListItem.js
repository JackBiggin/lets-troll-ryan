import { Col, Row, Form } from "react-bootstrap"
import "./ListItem.css"

function ListItem(props) {
  return (
    <div className="list-item">
        <Row>
            <Col xs={1}><Form.Check type="checkbox" /></Col>
            <Col xs={11}>{props.item}</Col>
        </Row>
    </div>
  );
}

export default ListItem;
