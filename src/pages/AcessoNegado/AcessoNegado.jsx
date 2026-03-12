import { useNavigate } from "react-router-dom";
import styles from "./AcessoNegado.module.css";

export default function AcessoNegado() {
    const navigate = useNavigate();

    return (
        <main className={styles.principalBox}>
            <section className={styles.erroCard}>
                <div className={styles.erroIcon}>
                    <span className="material-symbols-outlined">lock</span>
                </div>
                <h1>Acesso Negado</h1>
                <p>
                    Seu perfil não possui permissão para acessar esta funcionalidade do sistema AAPM.
                    Caso necessário, entre em contato com a administração.
                </p>
                <button
                    className={`btn btn-primary ${styles.btnPrimary}`}
                    onClick={() => navigate("/")}
                >
                    Voltar para o login
                </button>
            </section>
        </main>
    );
}