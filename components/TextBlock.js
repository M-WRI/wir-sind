import { useState } from "react";
import ReactMarkdown from "react-markdown";

// components
import VisibilityBtn from "./VisibilityBtn";

// styles
import styles from "../styles/TextBlock.module.css";

const TextBlock = ({ data = [], color = "dark" }) => {
  const [hidden, setHidden] = useState(true);

  const isVisible = () => {
    setHidden(!hidden);
  };

  return (
    <article
      className={`${styles.textBlockContainer} ${
        color === "dark" ? styles.dark : styles.light
      }`}
    >
      <ReactMarkdown>{data[0].text_block}</ReactMarkdown>
      {data.length > 1 && (
        <div
          className={`${styles.isVisible} ${hidden ? styles.no : styles.yes}`}
        >
          {data.slice(1).map((text, i) => {
            return <ReactMarkdown key={i}>{text.text_block}</ReactMarkdown>;
          })}
        </div>
      )}
      <VisibilityBtn isVisible={isVisible} hidden={hidden} color={color} />
    </article>
  );
};

export default TextBlock;
