import Image from "next/image";
import ShopImage from "../../../public/360_F_241431868_8DFQpCcmpEPVG0UvopdztOAd4a6Rqsoo.jpg";
import { TiTick } from "react-icons/ti";
import styles from "./hero.module.css";
// const ShopImage =
//   "https://res.cloudinary.com/dlrnljvah/image/upload/v1738017926/re9xaukzrodjbjeg8zkz.png";
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroLeft}>
        <h1 className={styles.title}>Cats shopping</h1>
        <p className={styles.desc}>
          The best successful solution for online shopping{" "}
        </p>
        <div className={styles.services}>
          <div className={styles.serviceItem}>
            <TiTick /> Easy To Use Control Panel
          </div>
          <div className={styles.serviceItem}>
            <TiTick /> Best products
          </div>
          <div className={styles.serviceItem}>
            <TiTick /> Easy to pay
          </div>
        </div>
      </div>
      <div>
        <Image
          src={ShopImage}
          className="rounded-xl shadow-xl shadow-gray-800"
          alt="cloud"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default Hero;

// cost List = React.memo((props) => {
//     console.log("list component rendered");
//     return props.item.map((item) => <div key={item}>{item}</div>)

// })
