import Image from "next/image";
import Link from "next/link";
import ReactPlayer from "react-player";
import { images } from "../data/imageSlider";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// styles
import styles from "../styles/Main.module.css";

// components
import TextBlock from "../components/TextBlock";
import InfoCard from "../components/InfoCard";
import Protagonist from "../components/Protagonist";

const Main = ({ content }) => {
  const { the_movie, the_premiere, the_project, the_protagonists } =
    content.attributes;

  console.log(images, "<-----");

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <main className={styles.mainContainer}>
      <header className={styles.headerContainer}>
        <h1 className={styles.mainHeadline}>
          <span>Wir sind die</span> <span>Veränderung</span>
        </h1>
        <div className={styles.titleImageContainer}>
          <Image
            src="/images/title-image.jpg"
            alt="Wir sind die Veränderung"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <Link href="#" passHref={true} target="blank">
          <div className={styles.premiereBtn}>
            <h3 className={styles.buttonHeadline}>8. März 2022</h3>
            <h4 className={styles.buttonSubHead}>
              <strong>ZOOM:</strong> XYZ123456789ABC
            </h4>
          </div>
        </Link>
      </header>
      {/* =========== */}
      {/* SECTION TWO */}
      {/* =========== */}
      <section className={styles.sectionTwoContainer}>
        <h2 className={`${styles.sectionHeadline} ${styles.white}`}>
          Der Film
        </h2>
        <div className={styles.videoContainer}>
          <ReactPlayer
            url={the_movie.movie_trailer}
            width={"100%"}
            height={"auto"}
            controls={true}
          />
        </div>
        <TextBlock data={the_movie.section_description} color="light" />
      </section>
      {/* ============= */}
      {/* SECTION THREE */}
      {/* ============= */}
      <section className={styles.sectionThreeContainer}>
        <h2 className={`${styles.sectionHeadline}`}>Die Premiere</h2>
        <div className={styles.sectionGrid}>
          <div>
            <TextBlock data={the_premiere.section_description} color="dark" />
          </div>
          <div>
            <InfoCard data={the_premiere.info_card} />
          </div>
        </div>
      </section>
      {/* ============ */}
      {/* SECTION FOUR */}
      {/* ============ */}
      <section className={styles.sectionFourContainer}>
        <h2 className={`${styles.sectionHeadline} ${styles.white}`}>
          Das Projekt
        </h2>
        <TextBlock data={the_project.section_description} color="light" />
      </section>
      {/* ============ */}
      {/* SECTION FIVE */}
      {/* ============ */}
      <section className={styles.sectionFiveContainer}>
        <h2 className={`${styles.sectionHeadline}`}>DIE PROTAGONISTINNEN</h2>
        <div className={styles.sectionFiveGrid}>
          <Protagonist data={the_protagonists.list} />
        </div>
      </section>
      {/* =========== */}
      {/* SECTION SIX */}
      {/* =========== */}
      <section className={styles.sectionSixContainer}>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {images.map((image, index) => (
              <div key={index} className="embla__slide">
                <div className="box">
                  <Image
                    src={`/${image.img}`}
                    alt={image.alt}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export async function getStaticProps() {
  const content = await import(`../content/pages/${"home"}.md`);
  return { props: { content: content.default } };
}

export default Main;
