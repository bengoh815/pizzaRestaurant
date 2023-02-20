import styles from '../styles/Footer.module.css'
import Image from 'next/image'

export default function Footer () {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/footer.png" alt="" fill style={{objectFit:"contain"}}/>
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        PIZZA FOR THE TUMMY, CALL FOR THE YUMMY.
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>
                        FIND OUR RESTAURANTS
                    </h1>
                    <p className={styles.text}>
                        1234 W. Sesame St. #123.
                        <br /> Kansas, 98765
                        <br /> (202) 555-0118
                    </p>
                    <p className={styles.text}>
                        34 S. Honey St. #85.
                        <br /> Pennsyvania, 26293
                        <br /> (847) 333-9132
                    </p>
                    <p className={styles.text}>
                        754 W. Canton Ave. #734.
                        <br /> Illinios, 98765
                        <br /> (309) 723-5953
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>
                        WORKING HOURS
                    </h1>
                    <p className={styles.text}>
                        MONDAY UNTIL FRIDAY
                        <br/> 9:00-22:00
                    </p>
                    <p className={styles.text}>
                        SATURDAY & SUNDAY
                        <br/> 12:00-23:00
                    </p>
                </div>
            </div>
        </div>
    )
}