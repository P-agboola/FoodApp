import PizzaCard from "./PizzaCard"

const styles=require("../styles/PizzaList.module.css")

const PizzaList =()=>{
    return (
        <div className={styles.container}>
            <h1 className={styles.title}> THE BEST PIZZA IN TOWN</h1>
            <p className={styles.desc}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum impedit dolore omnis. Blanditiis, saepe eveniet optio, explicabo velit aspernatur hic tempore perspiciatis, libero quo quibusdam! Ad laudantium consequuntur sit ducimus!
            </p>
            <div className={styles.wrapper}>
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
            </div>
        </div>
    )
}

export default PizzaList