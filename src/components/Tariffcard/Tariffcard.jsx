import { useState } from "react";

import styles from './tariffcard.css';

function Tariffcard({ id, heading, price, speed, information }) {
    const [isSelected, toggleSelected] = useState(false)


    // Вариант 1:
    // const getColorClassHeading = (id) => {
    //     switch (id.length) {
    //         case 1:
    //             return `${styles.blueheading}`
    //             break;
    //         case 2:
    //             return `${styles.greenheading}`
    //             break;
    //         case 3:
    //             return `${styles.redheading}`
    //             break;
    //         case 4:
    //             return `${styles.blackheading}`
    //             break;
    //         default:
    //             break;
    //     }
    // }
    // const colorClassHeading = getColorClassHeading(id)

    // const getColorClassPrice = (id) => {
    //     switch (id.length) {
    //         case 1:
    //             return `${styles.blueprice}`
    //             break;
    //         case 2:
    //             return `${styles.greenprice}`
    //             break;
    //         case 3:
    //             return `${styles.redprice}`
    //             break;
    //         case 4:
    //             return `${styles.blackprice}`
    //             break;
    //         default:
    //             break;
    //     }
    // }
    // const colorClassPrice = getColorClassPrice(id)

    // return (
    //     <>
    //         {
    //             isSelected
    //                 ? (<div className={`${styles.card} ${styles.selected}`} tabindex="0" onBlur={() => { toggleSelected(false) }} onClick={() => { toggleSelected(false) }
    //                 }>
    //                     <div className={styles.listgroup}>
    //                         <p className={`${styles.listheading} ${colorClassHeading}`}>{heading}</p>
    //                         <p className={`${styles.listprice} ${colorClassPrice}`}>{price} руб/мес</p>
    //                         <p className={styles.listspeed}>{speed}</p>
    //                         <p className={styles.listinformation}>{information}</p>
    //                     </div>
    //                 </div >)
    //                 : (<div className={styles.card} contentEditable onClick={() => { toggleSelected(true) }}>
    //                     <div className={styles.listgroup}>
    //                         <p className={`${styles.listheading} ${colorClassHeading}`}>{heading}</p>
    //                         <p className={`${styles.listprice} ${colorClassPrice}`}>{price} руб/мес</p>
    //                         <p className={styles.listspeed}>{speed}</p>
    //                         <p className={styles.listinformation}>{information}</p>
    //                     </div>
    //                 </div >)
    //         }
    //     </>)


    // Вариант 2:
    let color;
    switch (id.length) {
        case 1:
            color = <div>
                <p className={`${styles.listheading} ${styles.blueheading}`}>{heading}</p>
                <p className={`${styles.listprice} ${styles.blueprice}`}>{price} руб/мес</p>
            </div>;
            break;
        case 2:
            color = <div>
                <p className={`${styles.listheading} ${styles.greenheading}`}>{heading}</p>
                <p className={`${styles.listprice} ${styles.greenprice}`}>{price} руб/мес</p>
            </div>;
            break;
        case 3:
            color = <div>
                <p className={`${styles.listheading} ${styles.redheading}`}>{heading}</p>
                <p className={`${styles.listprice} ${styles.redprice}`}>{price} руб/мес</p>
            </div>;
            break;
        case 4:
            color = <div>
                <p className={`${styles.listheading} ${styles.blackheading}`}>{heading}</p>
                <p className={`${styles.listprice} ${styles.blackprice}`}>{price} руб/мес</p>
            </div>;
            break;
        default:
            break;
    }

    return (
        <>
            {
                isSelected
                    ? (<div className={`${styles.card} ${styles.selected}`} tabindex="0" onBlur={() => { toggleSelected(false) }} onClick={() => { toggleSelected(false) }
                    }>
                        <div className={styles.listgroup}>
                            {color}
                            <p className={styles.listspeed}>{speed}</p>
                            <p className={styles.listinformation}>{information}</p>
                        </div>
                    </div >)
                    : (<div className={styles.card} contentEditable onClick={() => { toggleSelected(true) }}>
                        <div className={styles.listgroup}>
                            {color}
                            <p className={styles.listspeed}>{speed}</p>
                            <p className={styles.listinformation}>{information}</p>
                        </div>
                    </div >)
            }
        </>)
}


export default Tariffcard;