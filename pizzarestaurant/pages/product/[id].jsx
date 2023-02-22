import styles from '../../styles/Product.module.css'
import Image from 'next/image'

export default function Product() {
    const pizza = {
        id: 1,
        img: '/img/pizza.png',
        name: 'Pepporoni',
        price: [10.99, 14.99, 29.99],
        desc: "beef and cured pork mixed together and then seasoned with a blend of homegrown paprika, garlic, black pepper, crushed red pepper, cayenne"
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imageContainer}>
                    <Image src={pizza.img} alt={pizza.name} fill style={{objectFit:'contain'}}/>
                </div>
            </div>
            <div className={styles.right}>

            </div>
        </div>
    )
}