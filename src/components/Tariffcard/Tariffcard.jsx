import "bootstrap/dist/css/bootstrap.min.css";
import { Card, ListGroup } from 'react-bootstrap';

import styles from '../Tariffcards/tariffcards.css';

function Tariffcard({ heading, price, speed, information }) {
    return (
        <Card className="text-center">
            <ListGroup variant="flush">
                <ListGroup.Item className={heading}>{heading}</ListGroup.Item>
                <ListGroup.Item className={price}>{price}</ListGroup.Item>
                <ListGroup.Item className={speed}>{speed}</ListGroup.Item>
                <ListGroup.Item className={information}>{information}</ListGroup.Item>
            </ListGroup>
        </Card>
    );
}

export default Tariffcard;