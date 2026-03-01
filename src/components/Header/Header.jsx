import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images/AAPM-Logo.png";

export default function Header() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("tema") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("tema", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("tema", "light");
    }
  }, [darkMode]);

  return (
    <div className={styles.navBar}>
      <div className={styles.logoAapm}>
        <img
          src={logo}
          alt="Logo da AAPM"
          height="50"
          width="50"
        />
      </div>

      <button
        className={styles.toggleDark}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      <div className={styles.fundoOnda}></div>
    </div>
  );
}