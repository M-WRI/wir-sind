import { data } from "../data/home";
import Image from "next/image";

// styles
import styles from "../styles/Protagonist.module.css";

const Protagonist = ({ data }) => {
  console.log(data);
  return (
    <>
      {data.map((protagonist, i) => (
        <div key={i}>
          <div className={styles.imageContainer}>
            <Image
              src={`/${protagonist.image}`}
              alt={protagonist.name}
              layout="fill"
              priority
              objectFit="cover"
            />
          </div>
          <h3 className={styles.name}>{protagonist.name}</h3>
          <p className={styles.bio}>{protagonist.bio}</p>
        </div>
      ))}
    </>
  );
};

export default Protagonist;
