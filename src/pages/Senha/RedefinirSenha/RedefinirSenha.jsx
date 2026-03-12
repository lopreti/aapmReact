import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { alertErro, alertSucesso, alertAviso } from "../../../components/Alerts/Alerts.jsx";
import styles from "./RedefinirSenha.module.css";

export default function RedefinirSenha() {
    const navigate = useNavigate();

    // useSearchParams = substitui o URLSearchParams de antgamente
    const [searchParams] = useSearchParams();
    const email = searchParams.get("email");

    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [mostrarSenha1, setMostrarSenha1] = useState(false);
    const [mostrarSenha2, setMostrarSenha2] = useState(false);
    const [carregando, setCarregando] = useState(false);

    const API_REDEFINIR = `http://localhost:3000/verificacao/senha/${encodeURIComponent(email)}`;

    async function handleSubmit(e) {
        e.preventDefault();

        if (!senha || !confirmarSenha) {
            alertAviso("Por favor, preencha todos os campos.");
            return;
        }

        if (senha !== confirmarSenha) {
            alertAviso("As senhas não coincidem.");
            return;
        }

        try {
            setCarregando(true);

            const resposta = await fetch(API_REDEFINIR, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, senha }),
            });

            const dados = await resposta.json();

            if (!resposta.ok) {
                alertErro(dados.erro || "Erro ao redefinir senha.");
                return;
            }

            alertSucesso(dados.mensagem);
            navigate("/"); // vai pro login

        } catch (erro) {
            alertErro(erro.message);
        } finally {
            setCarregando(false);
        }
    }

    return (
        <main className={styles.principalBox}>
            <section className={styles.entreAqui}>
                <h2>Redefina a sua senha:</h2>
            </section>

            <form className={styles.formNovaSenha} onSubmit={handleSubmit}>

                <div className={`${styles.inputBox} ${styles.inputIcon}`}>
                    <input
                        type={mostrarSenha1 ? "text" : "password"}
                        className="form-control"
                        id="password1"
                        required
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <label htmlFor="password1">Nova Senha</label>
                    <span
                        className={mostrarSenha1 ? styles.iconHide : styles.icon}
                        onClick={() => setMostrarSenha1(!mostrarSenha1)}
                    />
                </div>

                <div className={`${styles.inputBox} ${styles.inputIcon}`}>
                    <input
                        type={mostrarSenha2 ? "text" : "password"}
                        className="form-control"
                        id="password2"
                        required
                        value={confirmarSenha}
                        onChange={(e) => setConfirmarSenha(e.target.value)}
                    />
                    <label htmlFor="password2">Confirmar Nova Senha</label>
                    <span
                        className={mostrarSenha2 ? styles.iconHide : styles.icon}
                        onClick={() => setMostrarSenha2(!mostrarSenha2)}
                    />
                </div>

                <button
                    type="submit"
                    className={`btn btn-primary ${styles.btnPrimary}`}
                    disabled={carregando}
                >
                    {carregando ? "Redefinindo..." : "Redefinir"}
                </button>
            </form>

            <button className={styles.voltar} onClick={() => navigate(-1)}>
                ← Voltar
            </button>
        </main>
    );
}