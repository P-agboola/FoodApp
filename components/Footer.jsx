import Image from "next/image"

const styles = require("../styles/Footer.module.css")

const Footer = ()=> {
    return(
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" fill={true} alt="" />
            </div>
            <div className={styles.item}>

            </div>
        </div>
    )
}

export default Footer