import styles from '../styles/PizzaCard.module.css';
import Image from 'next/image';

export default function PizzaCard() {
    return (
        <div className={styles.container}>
            <Image src='/img/pizza.png' width="500" height="500"/>
            <h1 className={styles.title}>SOME PIZZA</h1>
            <span className={styles.price}>$12.34</span>
            <p className={styles.description}>Lorem ipsum dolor sit amet</p>

        </div>
    )
}