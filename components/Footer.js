import Link from "next/link";
import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";

// style
import styles from "../styles/Footer.module.css";

const ContactForm = ({ locale }) => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        <div>
          <h2 className={styles.footerHeadline}>
            {locale === "fr" ? "Contact" : "Kontakt"}
          </h2>
          <div className={styles.contactDetails}>
            <div className={styles.detailsContainer}>
              <div className={styles.iconWrapper}>
                <AiOutlineMail />
              </div>
              mail@veraenderung-changement-change.com
            </div>

            <div className={styles.detailsContainer}>
              <div className={styles.iconWrapper}>
                <AiOutlineInstagram />
              </div>
              @wirsinddieveränderung
            </div>
          </div>
        </div>
        <div>
          <h2 className={styles.footerHeadline}>
            {locale === "fr" ? "Participer" : "Mitmachen"}
          </h2>
          <p className={styles.infoText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactForm;
