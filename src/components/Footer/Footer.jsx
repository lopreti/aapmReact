import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.texto}>
        Desenvolvido por <strong>Isabella Lopreti</strong> &{" "}
        <strong>Gabriel Duarte</strong> • © 2026
      </p>
    </footer>
  );
}