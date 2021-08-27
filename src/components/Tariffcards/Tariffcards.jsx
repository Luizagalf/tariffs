import styles from './tariffcards.css';

import jsonTariffs from '../../jsonTariffs';
import Tariffcard from '../Tariffcard/Tariffcard';

function Tariffcards() {
    return (
        <div className={styles.row}>
            {
                jsonTariffs.map((tariff) =>
                    <div className={styles.col}>
                        <Tariffcard heading={tariff.heading} price={tariff.price} speed={tariff.speed} information={tariff.information} headingcolor={tariff.headingcolor} pricecolor={tariff.pricecolor} isSelected={tariff.true}></Tariffcard>
                    </div>
                )
            }
        </div>
    );
}

export default Tariffcards;