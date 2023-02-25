import styles from '../../styles/Product.module.css'
import Image from 'next/image'
import { useState } from 'react';

export default function Product() {
    const [size, setSize] = useState(0);
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
                <div className={styles.imgContainer}>
                    <Image src={pizza.img} alt={pizza.name} fill style={{objectFit:'contain'}}/>
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{pizza.name}</h1>
                <span className={styles.price}>${pizza.price[size]}</span>
                <p className={styles.desc}>{pizza.desc}</p>
                <h3 className={styles.choose}>Choose your size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={()=>setSize(0)}>
                        <Image src="/img/size.png" alt="" fill/>
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} onClick={()=>setSize(1)}>
                        <Image src="/img/size.png" alt="" fill/>
                        <span className={styles.number}>Medium</span>
                    </div>
                    <div className={styles.size} onClick={()=>setSize(2)}>
                        <Image src="/img/size.png" alt="" fill/>
                        <span className={styles.number}>Large</span>
                    </div>
                </div>
                <h3 className={styles.choose}>Choose additional ingredients</h3>
                <div className={styles.ingredients}>
                    <div className={styles.option}>
                        <input className={styles.checkbox} type="checkbox" id="double" name="double"/>
                        <label htmlFor="double">Double Ingredients</label>
                    </div>
                    <div className={styles.option}>
                        <input className={styles.checkbox} type="checkbox" id="cheese" name="cheese"/>
                        <label htmlFor="cheese">Extra Cheese</label>
                    </div>
                    <div className={styles.option}>
                        <input className={styles.checkbox} type="checkbox" id="pineapple" name="pineapple"/>
                        <label htmlFor="pineapple">Add Pineapples</label>
                    </div>
                    <div className={styles.option}>
                        <input className={styles.checkbox} type="checkbox" id="garlic" name="garlic"/>
                        <label htmlFor="garlic">Garlic Sauce</label>
                    </div>
                    <div className={styles.option}>
                        <input className={styles.checkbox} type="checkbox" id="house" name="house"/>
                        <label htmlFor="house">House Sauce</label>
                    </div>
                </div>
                <div className={styles.add}>
                    <input className={styles.quantity} type="number" defaultValue={1}/>
                    <button className={styles.button}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}