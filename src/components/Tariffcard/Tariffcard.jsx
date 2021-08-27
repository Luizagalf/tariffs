import styles from './tariffcard.css';

function Tariffcard({ heading, price, speed, information, headingcolor, pricecolor, isSelected }) {
    return (
        <div className={`${styles.card} ${isSelected && styles.selected}`}>
            <div className={styles.listgroup}>
                <p className={styles.listheading} style={{ backgroundColor: '{headingcolor}' }}>{heading}</p>
                <p className={styles.listprice} style={{ backgroundColor: '{pricecolor}' }}>{price}</p>
                <p className={styles.listspeed}>{speed}</p>
                <p className={styles.listinformation}>{information}</p>
            </div>
        </div >
    );
}

export default Tariffcard;