import { Col, Row } from "react-bootstrap"
import "./ListItem.css"

function ListItem(props) {
  return (
    <div className="list-item">
        <Row>
            <Col xs={1}>☑️</Col>
            <Col xs={11}>{props.item}</Col>
        </Row>
    </div>
  );
}

export default ListItem;
