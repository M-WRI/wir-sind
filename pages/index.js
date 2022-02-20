// data
import { data } from "../data/home";
import { protagonists } from "../data/protagonists";
import { images } from "../data/imageSlider";

// components
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import ReactPlayer from "react-player";
import Image from "next/image";

// import { getStaticProps } from "next";
import styles from "../styles/Home.module.css";

export default function Home({ content }) {
  const { titleSection, sectionTwo, sectionThree, sectionFour } = data;

  const { premiere_title, premiere_sub_title, premiere_description } =
    content.attributes;

  return (
    <>
      <header className={styles.headSectionContainer}>
        <div className={styles.titleImageWrapper}>
          <Image
            src="/images/title-image-2.jpg"
            alt="title-image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </header>
      <section className={styles.sectionTwoContainer}>
        <div>
          <h2 className={styles.sectionHeadline}>{premiere_title}</h2>
          <h3 className={styles.sectionSubHeadline}>{premiere_sub_title}</h3>
          <p className={styles.sectionText}>
            {sectionTwo.blockOne.textBlockOne}
          </p>

          <p className={styles.sectionText}>
            {sectionTwo.blockOne.textBlockOne}
          </p>

          <p className={styles.sectionText}>
            {sectionTwo.blockOne.textBlockTwo}
          </p>

          <p className={styles.sectionText}>
            {sectionTwo.blockOne.textBlockThree}
          </p>

          <p className={styles.sectionText}>
            {sectionTwo.blockOne.textBlockFour}
          </p>

          <p className={styles.sectionText}>
            {sectionTwo.blockOne.textBlockFive}
          </p>
        </div>
        <div>
          <div className={styles.infoCard}>
            <h2 className={styles.infoCardHeadline}>8. März 2022</h2>
            <span className="Z">
              <strong>Zoom:</strong> XYZ123456789ABC
            </span>
            <div>
              <h3>Ablauf</h3>
              <ul>
                <li>
                  <strong>19:00</strong> – Begrüßung
                </li>
                <li>
                  <strong>19:30</strong> – Ausstrahlung
                </li>
                <li>
                  <strong>20:15</strong> – Wie geht es weiter?
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div>
          <h2 className={styles.sectionHeadline}>
            {sectionTwo.blockTwo.title}
          </h2>
          <p className={styles.sectionText}>{sectionTwo.blockTwo.text}</p>
        </div> */}
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
      <section className={styles.sectionSixContainer}>
        <div className={styles.containerSlider}>
          {images.map((image) => (
            <div key={image.id}>
              <Image
                src={`/${image.img}`}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
        <div className={styles.btnContainer}>
          <div className={styles.btnSlider}></div>
          <div className={styles.btnSlider}></div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const content = await import(`../content/pages/${"home"}.md`);
  return { props: { content: content.default } };
}
