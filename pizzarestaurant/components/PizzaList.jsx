import styles from '../styles/PizzaList.module.css';
import PizzaCard from './PizzaCard';

export default function PizzaList() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST PIZZA IN THE MULTIVERSE</h1>
            <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus vestibulum tincidunt. Sed ut scelerisque dui. Duis ac lacus sagittis, euismod turpis non, mattis lectus. Sed mollis malesuada nulla facilisis finibus. Fusce eget metus felis. Aliquam metus dolor, interdum nec libero ac, luctus pulvinar lacus. Duis in dolor augue. Aenean magna magna, lacinia nec volutpat posuere, cursus eu augue. Duis vel rhoncus orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas ex lorem, lobortis vitae est ac, ultricies faucibus diam. Duis suscipit congue ligula suscipit consequat. Duis vulputate ut lectus vel rhoncus. Donec mauris ipsum, dictum et urna in, pulvinar ultrices arcu. Etiam risus orci, porta eu magna eu, ultricies aliquet nisi. Duis id pharetra tellus, fermentum consequat mi.</p>
            <div className={styles.wrapper}>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
                <PizzaCard/>
            </div>
        </div>
    );
}