// import { getStaticProps } from "next";
import styles from "../styles/Home.module.css";

export default function Home({ content }) {
  return (
    <div className={styles.container}>
      <h1>hi</h1>
    </div>
  );
}

export async function getStaticProps() {
  const content = await import(`../content/pages/${"home"}.md`);
  return { props: { content: content.default } };
}
