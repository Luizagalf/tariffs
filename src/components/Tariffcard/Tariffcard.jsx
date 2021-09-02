import { useState } from "react";

import styles from './tariffcard.css';

function Tariffcard({ id, heading, price, speed, information }) {
    const [isSelected, toggleSelected] = useState(false)

    const getColorClassHeading = (id) => {
        switch (id.length) {
            case 1:
                return `${styles.blueheading}`
                break;
            case 2:
                return `${styles.greenheading}`
                break;
            case 3:
                return `${styles.redheading}`
                break;
            case 4:
                return `${styles.blackheading}`
                break;
            default:
                break;
        }
    }
    const colorClassHeading = getColorClassHeading(id)

    const getColorClassPrice = (id) => {
        switch (id.length) {
            case 1:
                return `${styles.blueprice}`
                break;
            case 2:
                return `${styles.greenprice}`
                break;
            case 3:
                return `${styles.redprice}`
                break;
            case 4:
                return `${styles.blackprice}`
                break;
            default:
                break;
        }
    }
    const colorClassPrice = getColorClassPrice(id)

    return (
        <>
            {
                isSelected
                    ? (<div className={`${styles.card} ${styles.selected}`} tabindex="0" onBlur={() => { toggleSelected(false) }} onClick={() => { toggleSelected(false) }
                    }>
                        <div className={styles.listgroup}>
                            <p className={`${styles.listheading} ${colorClassHeading}`}>{heading}</p>
                            <p className={`${styles.listprice} ${colorClassPrice}`}>{price} руб/мес</p>
                            <p className={styles.listspeed}>{speed}</p>
                            <p className={styles.listinformation}>{information}</p>
                        </div>
                    </div >)
                    : (<div className={styles.card} contentEditable onClick={() => { toggleSelected(true) }}>
                        <div className={styles.listgroup}>
                            <p className={`${styles.listheading} ${colorClassHeading}`}>{heading}</p>
                            <p className={`${styles.listprice} ${colorClassPrice}`}>{price} руб/мес</p>
                            <p className={styles.listspeed}>{speed}</p>
                            <p className={styles.listinformation}>{information}</p>
                        </div>
                    </div >)
            }
        </>)
}

export default Tariffcard;