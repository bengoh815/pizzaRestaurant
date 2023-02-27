import styles from "../styles/Cart.module.css"

export default function Cart() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
            <table className={styles.table}>
                <tr className={styles.tr}>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Extras</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image src="" alt="" fill styles={{objectFit:contain}}/>
                        </div>
                    </td>
                </tr>
            </table>
            </div>
            <div className={styles.right}></div>
        </div>
    )
}