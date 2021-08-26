import "bootstrap/dist/css/bootstrap.min.css";

import jsonTariffs from '../../jsonTariffs';
import Tariffcard from '../Tariffcard/Tariffcard';
import { Row, Col } from "react-bootstrap";

function Tariffcards() {
    return (
        <Row xs={1} md={4} className="g-4 justify-content-md-center">
            {
                jsonTariffs.map((tariff) =>
                    <Col className="d-flex p-2">
                        <Tariffcard heading={tariff.heading} price={tariff.price} speed={tariff.speed} information={tariff.information}></Tariffcard>
                    </Col>
                )
            }
        </Row>
    );
}

export default Tariffcards;