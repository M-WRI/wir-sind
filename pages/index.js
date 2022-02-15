// data
import { data } from "../data/home";
import { protagonists } from "../data/protagonists";

// components
import ReactPlayer from "react-player";
import Image from "next/image";

// import { getStaticProps } from "next";
import styles from "../styles/Home.module.css";

export default function Home({ content }) {
  const { titleSection, sectionTwo, sectionThree, sectionFour } = data;
  return (
    <>
      <header className={styles.headSectionContainer}>
        <video controls="true" autoPlay muted loop className={styles.bgVideo}>
          <source src={titleSection.bgVideo} type="video/mp4" />
        </video>
        {/* <h1 className={styles.mainHeadline}>
          <span>{titleSection.title.partOne}</span>
          <span>{titleSection.title.partTwo}</span>
        </h1> */}
      </header>
      <section className={styles.sectionTwoContainer}>
        <div>
          <h2 className={styles.sectionHeadline}>
            {sectionTwo.blockOne.title}
          </h2>
          <h3 className={styles.sectionSubHeadline}>
            {sectionTwo.blockOne.subTitle}
          </h3>
          <p className={styles.sectionText}>{sectionTwo.blockOne.text}</p>
        </div>
        <div>
          <h2 className={styles.sectionHeadline}>
            {sectionTwo.blockTwo.title}
          </h2>
          <p className={styles.sectionText}>{sectionTwo.blockTwo.text}</p>
        </div>
      </section>
      <section className={styles.sectionThreeContainer}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.sectionHeadline}>{sectionThree.title}</h2>
          <p className={styles.sectionText}>{sectionThree.text}</p>
        </div>
      </section>
      <section className={styles.sectionFourContainer}>
        <div>
          <h2 className={styles.sectionHeadline}>{sectionFour.title}</h2>
          <p className={styles.sectionText}>{sectionFour.text}</p>
        </div>
        <div>
          <ReactPlayer
            url={sectionFour.link}
            width={"100%"}
            height={"auto"}
            controls={true}
          />
        </div>
      </section>
      <section className={styles.sectionFiveContainer}>
        {protagonists.map((protagonist) => (
          <div key={protagonist.id}>
            <div className={styles.protagonistImage}>
              <Image
                src={`/${protagonist.img}`}
                alt={protagonist.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h4 className={styles.protagonistHead}>{protagonist.name}</h4>
            <p className={styles.protagonistBio}>{protagonist.bio}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export async function getStaticProps() {
  const content = await import(`../content/pages/${"home"}.md`);
  return { props: { content: content.default } };
}
