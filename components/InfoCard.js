import Link from "next/link";

// styles
import styles from "../styles/InfoCard.module.css";

const InfoCard = ({ data }) => {
  console.log(data, "<-----");
  const { title, zoom_link, zoom_link_title, schedule } = data;
  return (
    <Link href={zoom_link}>
      <div className={styles.infoCardContainer}>
        <h3 className={styles.infoCardHeadline}>{title}</h3>
        <span className={styles.infoCardSubHead}>
          <strong>Zoom:</strong> {zoom_link_title}
        </span>
        <div className={styles.infoCardSchedule}>
          <h4 className={styles.infoCardScheduleHead}>Ablauf</h4>
          <ul className={styles.infoCardScheduleList}>
            {schedule.map((el, i) => (
              <li className={styles.listItem} key={i}>
                <strong>{el.time}</strong> – {el.procedure}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default InfoCard;
