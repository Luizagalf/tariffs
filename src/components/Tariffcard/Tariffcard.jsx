import styles from './tariffcard.css';

function Tariffcard({ id, heading, price, speed, information, isSelected }) {
    let color;
    switch (id.length) {
        case 1:
            color = <div>
                    <p className={`${styles.listheading} ${styles.blueheading}`}>{heading}</p>
                    <p className={`${styles.listprice} ${styles.blueprice}`}>{price}</p>
                </div>;
            break;
        case 2:
            color = <div>
                <p className={`${styles.listheading} ${styles.greenheading}`}>{heading}</p>
                <p className={`${styles.listprice} ${styles.greenprice}`}>{price}</p>
            </div>;
            break;
        case 3:
            color = <div>
                <p className={`${styles.listheading} ${styles.redheading}`}>{heading}</p>
                <p className={`${styles.listprice} ${styles.redprice}`}>{price}</p>
            </div>;
            break;
        case 4:
            color = <div>
                <p className={`${styles.listheading} ${styles.blackheading}`}>{heading}</p>
                <p className={`${styles.listprice} ${styles.blackprice}`}>{price}</p>
            </div>;
            break;
        default:
            break;
    }

    return (
        <div className={`${styles.card} ${isSelected && styles.selected}`}>
            <div className={styles.listgroup}>
                {color}
                <p className={styles.listspeed}>{speed}</p>
                <p className={styles.listinformation}>{information}</p>
            </div>
        </div >
    );
}

export default Tariffcard;