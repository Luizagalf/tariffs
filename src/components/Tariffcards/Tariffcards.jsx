import styles from './tariffcards.css';

import jsonTariffs from '../../jsonTariffs';
import Tariffcard from '../Tariffcard/Tariffcard';

function Tariffcards() {
    return (
        <div className={styles.row}>
            {
                jsonTariffs.map((tariff) =>
                    <div className={styles.col}>
                        <Tariffcard key={tariff.id} id={tariff.id} heading={tariff.heading} price={tariff.price} speed={tariff.speed} information={tariff.information}></Tariffcard>
                    </div>
                )
            }
        </div>
    );
}

export default Tariffcards;