import Image from "next/image";

// styles
import styles from "../styles/VisibilityBtn.module.css";

const VisibilityBtn = ({ isVisible, hidden, color = "dark" }) => {
  return (
    <div
      onClick={isVisible}
      className={`${styles.visibilityBtnContainer} ${
        hidden ? styles.column : styles.columnReverse
      }`}
    >
      <span
        className={`${styles.visibilityText} ${
          color === "dark" ? styles.dark : styles.light
        }`}
      >
        {hidden ? "Mehr Lesen" : "Weniger Lesen"}
      </span>
      <div
        className={`${styles.arrow} ${
          hidden ? styles.arrowDown : styles.arrowUp
        }`}
      >
        <Image
          src={
            color === "dark" ? "/svg/arrow-dark.svg" : "/svg/arrow-white.svg"
          }
          alt="arrow"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default VisibilityBtn;
