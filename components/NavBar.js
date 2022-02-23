import { useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import styles from "../styles/Navbar.module.css";

const data = [
  { id: 1, title: "Home", slug: "home" },
  { id: 2, title: "Der Film", slug: "der-film" },
  { id: 3, title: "Die Premiere", slug: "die-premiere" },
  { id: 4, title: "Das Projekt", slug: "das-projekt" },
  { id: 5, title: "Die Protagonistinnen", slug: "die-protagonistinnen" },
  { id: 6, title: "Kontakt", slug: "kontakt" },
  { id: 7, title: "Presse", slug: "presse" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const navHandeler = () => {
    setOpen(!open);
  };

  console.log(open);

  return (
    <>
      <nav className={styles.navBarContainer}>
        <ul className={styles.navBarItems}>
          {data.map((item) => (
            <li key={item.id} className={styles.navBarItem}>
              <Link href={`#${item.slug}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.mobHamburger}>
        <div onClick={navHandeler} className={styles.hamburgerIcon}>
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>

      <nav
        className={styles.mobNavBarContainer}
        style={{ opacity: open ? 1 : 0 }}
      >
        <div className={styles.listWrapper}>
          <ul className={styles.mobNavBarItems}>
            {data.map((item) => (
              <li
                key={item.id}
                className={styles.mobNavBarItem}
                onClick={navHandeler}
              >
                <Link href={`#${item.slug}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
