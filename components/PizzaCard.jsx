import Image from "next/image"

const styles = require("../styles/pizzaCard.module.css")

const PizzaCard=()=>{
    return(
        <div className={styles.container}>
            <Image src="/img/pizza.png" alt="" width="200" height="200"/>
            <h1 className={styles.title}>FIORI DI ZUCCA</h1>
            <span className={styles.price}>#3000.00</span>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
    )
}

export default PizzaCard