import styles from '../styles/Featured.module.css'
import Image from 'next/image'

export default function Featured() {
    const images = [
        '/img/featured1.png',
        '/img/featured2.png',
        '/img/featured3.png',
    ];

    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{left: 0}}>
                <Image src='/img/arrowl.png' alt='left arrow' fill/>
            </div>
            
            <div className={styles.wrapper}>
                {images.map((img, i) => {
                    <div className={styles.imgContainer} key={i}>
                        <Image src={img} alt='featured pizza' fill/>
                    </div>
                })}
                <Image src='/img/featured1.png' alt='featured pizza'  fill/>
            </div>
            
            <div className={styles.arrowContainer} style={{right: 0}}>
                <Image src='/img/arrowr.png' alt='right arrow' fill />
            </div>
        </div>
    )
}